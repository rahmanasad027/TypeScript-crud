import React from "react";
import { useGetPosts } from "./lib/api-hooks";
import { FETCHSTATES } from "./types";
import "./App.css";
import Post from "./components/Post";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const [posts, fetchState, getPosts] = useGetPosts();

  const navigatePost = () => {
    <Navigate to="/post" />;
  };

  return (
    <div className="App">
      <button onClick={navigatePost}>Post Page</button>
      <h1>React TypeScript Api hooks</h1>
      {fetchState === FETCHSTATES.DEFAULT && (
        <>
          <p>Hi this is react get api typescript project</p>
          <button onClick={getPosts}>get Posts</button>
        </>
      )}
      {fetchState === FETCHSTATES.LOADING && <p>Loading...</p>}
      {fetchState === FETCHSTATES.ERROR && (
        <>
          <p>oops something went wrong please try again</p>
          <button onClick={getPosts}>Retry</button>
        </>
      )}
      {fetchState === FETCHSTATES.SUCCESS && (
        <>
          <p>Here's the list of posts</p>
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id} className="post">
                <h3>
                  {post.id} - {post.title}
                </h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
