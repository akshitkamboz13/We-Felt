
import React, { useState, useEffect } from 'react';
import './Home.css'; 

const Home = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/e143b00e-f8a3-4fd4-9dd2-2fab882bd62f');
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1>Post Data</h1>
      <ul className="post-list">
        {postData.map((post, index) => (
          <li key={index} className="post-item">
            <h2>{post.name}</h2>
            <p className="post-title">Title: {post.title}</p>
            <p className="post-context">Context: {post.context}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
