import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const data = await response.json();
        console.log(data);

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

  const handleSave = async (postId) => {
    try {
      const response = await fetch(`http://localhost:3000/users/:${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "userId" : currentUser.user._id
        }),
      });

      if (response.ok) {
        console.log(`Post ${postId} saved successfully!`);
      } else {
        console.error(`Failed to save post ${postId}:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error saving post ${postId}:`, error);
    }
  };

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
                <p
              className="titlef"
              style={{ textAlign: "center", color: "#27ae60" }}
            >
              <b style={{ fontSize: "1.5rem" }}>Title:</b> {post.title}
            </p>
                <p className="post-context"><b>Context:</b> {post.context}</p>
                <div className="save-button"><button onClick={() => handleSave(post._id)}>Save</button></div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Home;
