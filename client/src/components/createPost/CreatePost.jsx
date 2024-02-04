import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts/create', { // Update the URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: currentUser.user.name,
          title: title,
          context: context,
        }),
      });
  
      if (response.ok) {
        console.log('Post created successfully!');
        window.location.href = "/";
      } else {
        console.error('Failed to create post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  

  return (
    <div>
      <h1>Create Post</h1>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Context:
        <textarea value={context} onChange={(e) => setContext(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
