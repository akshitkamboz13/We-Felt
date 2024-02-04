import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        setPostData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1>Post Data</h1>
      {loading ? (
        <div className="preloader-container">
          <div className="preloader"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {error && <p className="error-message">{error}</p>}
          <ul className="post-list">
            {postData.map((post) => (
              <li key={post._id} className="post-item">
                <h2 className="userName">{post.name}</h2>
                <p className="post-title">Title: {post.title}</p>
                <p className="post-context">Context: {post.context}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
