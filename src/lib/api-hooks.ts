import axios from "axios";
import React, { useState } from "react";
import { FETCHSTATES, PostData, PostsData } from "../types";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
export function useGetPosts() {
  const [fetchState, setFetchState] = useState(FETCHSTATES.DEFAULT);
  const [posts, setPosts] = useState<Array<PostData>>([]);
  const getPosts = async () => {
    try {
      setFetchState(FETCHSTATES.LOADING);
      const res = await axios.get(BASE_URL);
      const resData = res.data as Array<PostData>;
      setPosts(resData);
      setFetchState(FETCHSTATES.SUCCESS);
    } catch (e) {
      setFetchState(FETCHSTATES.ERROR);
    }
  };
  return [posts, fetchState, getPosts] as const;
}

export const usePostPosts = () => {
  // const [fetchState,setFetchState] = useState(FETCHSTATES.DEFAULT)
  const [response, setResponse] = useState<PostData>({
    userId: null,
    id: null,
    title: "",
    body: "",
  });
  const postPosts = async (PostData: PostsData) => {
    try {
      // setFetchState(FETCHSTATES.LOADING)
      const res = await axios.post(BASE_URL, PostData);
      const resData = res.data as PostData;
      setResponse(resData);
      // setFetchState(FETCHSTATES.SUCCESS)
    } catch (e) {
      // setFetchState(FETCHSTATES.ERROR)
    }
  };
  return [response, postPosts] as const;
};

//  object.freeze
