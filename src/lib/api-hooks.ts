import axios from "axios";
import React, { useState} from 'react'
import { fetchStates,PostData } from "../types";

export function useGetPosts () {
    const [fetchState,setFetchState] = useState(fetchStates.DEFAULT)
    const [posts,setPosts] = useState<Array<PostData>>([])
const getPosts = async () => {
    try{
        setFetchState(fetchStates.LOADING)
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const resData = res.data as Array<PostData>;
        setPosts(resData)
        setFetchState(fetchStates.SUCCESS)
    }catch(e){
        setFetchState(fetchStates.ERROR)
    }
}
return [posts,fetchState,getPosts] as const;
}
