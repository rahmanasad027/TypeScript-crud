import React, { useState, useEffect } from "react";
import { usePostPosts } from "../lib/api-hooks";
import { PostsData, PostData } from "../types";

const Post = () => {
  const [postData, setPostData] = useState<PostsData>({
    title: "",
    body: "",
    userId: Math.floor(Math.random() * 1000),
  });

  const [response, postPosts] = usePostPosts();
  console.log("/api response data", response);
  console.log(postData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     usePostPosts(postData)
  // console.log('hello')
  // }

  return (
    <div>
      {/* {  fetchState && FETCHSTATES.DEFAULT ( */}
      <>
        <h1>Add Post Here</h1>
        {/* <form onSubmit={usePostPosts}> */}
        <div>
          <label>Title: </label> <br />
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <input name="body" value={postData.body} onChange={handleChange} />
        </div>
        <br />
        <button onClick={() => postPosts(postData)}>Post Data</button>
      </>
      {/* )} */}
      {/* </form> */}
    </div>
  );
};

export default Post;
