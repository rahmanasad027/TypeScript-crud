import React from 'react';
import {useGetPosts} from './lib/api-hooks'
import { fetchStates } from './types';
import './App.css'

function App() {
  const [posts,fetchState,getPosts] = useGetPosts()
  return (
    <div className="App">
      <h1>React TypeScript Api hooks</h1>
      {
        fetchState === fetchStates.DEFAULT && (
          <>
          <p>Hi this is react get api typescript project</p>
          <button onClick={getPosts}>get Posts</button>
          </>
        )
      }
      {
        fetchState === fetchStates.LOADING && <p>Loading...</p>
      }
      {
        fetchState === fetchStates.ERROR && (
          <>
          <p>oops something went wrong please try again</p>
          <button onClick={getPosts}>Retry</button>
          </>
        )
      }
      {
        fetchState  === fetchStates.SUCCESS && (
          <>
          <p>Here's the list of posts</p>
          <ul className = 'posts-list'>
            {posts.map(post => (
              <li key={post.id} className='post' >
                <h3>{post.id} - {post.title}</h3>
                <p>{post.body}</p>
                </li>
            ))}
            
          </ul>
          </>
        )
      }
    </div>
  );
}

export default App;
