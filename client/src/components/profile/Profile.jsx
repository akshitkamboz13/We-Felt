import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const [savedPosts, setSavedPosts] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/users/${currentUser.user._id}`
        );
        const userData = await response.json();

        if (!dataFetched) {
          const postsDetailsPromises = userData.user.savedPosts.map(
            async (savedPost) => {
              try {
                const postIdWithoutColon = savedPost.postId.replace(/^:/, "");
                const postResponse = await fetch(
                  `http://localhost:3000/posts/${postIdWithoutColon}`
                );
                const postDetails = await postResponse.json();
                console.log("Post Details:", postDetails);
                return postDetails;
              } catch (postError) {
                console.error("Error fetching post details:", postError);
                return null;
              }
            }
          );

          const postsDetails = await Promise.all(postsDetailsPromises);
          console.log("All Post Details:", postsDetails);
          setSavedPosts(postsDetails.filter((post) => post !== null));

          setDataFetched(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [currentUser, dataFetched]);

  const handleSignOut = () => {
    sessionStorage.removeItem("currentUser");
    window.location.href = "/login";
  };

  const handleDeletePost = async (postId) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:3000/users/${currentUser.user._id}/${postId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (deleteResponse.ok) {
        // Update savedPosts after successful delete
        const updatedPosts = savedPosts.filter((post) => post._id !== postId);
        setSavedPosts(updatedPosts);
      } else {
        console.error("Error deleting post:", deleteResponse.statusText);
      }
    } catch (deleteError) {
      console.error("Error deleting post:", deleteError);
    }
  };

  if (!currentUser) {
    return (
      <div>
        <h2>Error: User information not found. Please log in.</h2>
        <Link to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {currentUser.user.name}!</h2>
      <p>
        <b>Email:</b> {currentUser.user.email}
      </p>      
      <ul className="saved-posts-list">
        {savedPosts.map((post, index) => (
          <li key={index} className="saved-post-item">
            <p
              className="titlef"
              style={{ textAlign: "center", color: "#27ae60" }}
            >
              <b style={{ fontSize: "1.5rem" }}>Title:</b> {post.title}
            </p>
            <p>
              <b>Content:</b> {post.context}
            </p>
            <div className="delete-button">
            <button onClick={() => handleDeletePost(post._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
<div className="button-container">
      <button onClick={handleSignOut} className="sign-out-button">
        Sign Out
      </button>
    </div>
    </div>
  );
};

export default Profile;
