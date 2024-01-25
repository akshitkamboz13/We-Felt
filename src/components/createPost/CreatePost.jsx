import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const handleCreatePost = async () => {
    try {
      const response = await fetch('https://mocki.io/v1/e143b00e-f8a3-4fd4-9dd2-2fab882bd62f', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: currentUser.name,
          title: title,
          context: context,
        }),
      });

      if (response.ok) {
        console.log('Post created successfully!');
        // You can add additional logic here, such as redirecting to a different page.
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
