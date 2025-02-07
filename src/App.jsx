// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import { initialPosts } from './data/sampleData';

function App() {
  const [posts, setPosts] = useState(initialPosts);
  
  const handleCreatePost = (newPostContent) => {
    const newPost = {
      id: Date.now(),
      author: {
        name: "Current User",
        avatar: "/api/placeholder/50/50"
      },
      content: newPostContent,
      likes: 0,
      comments: [],
      timestamp: new Date().toISOString()
    };
    
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };
  
  const handleLike = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post =>
        post.id === postId 
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  };
  
  const handleComment = (postId, commentText) => {
    const newComment = {
      id: Date.now(),
      author: "Current User",
      text: commentText,
      timestamp: new Date().toISOString()
    };
    
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      )
    );
  };

  return (
    <div className="container mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-6">Social Feed</h1>
      <CreatePost onCreatePost={handleCreatePost} />
      <PostList 
        posts={posts}
        onLike={handleLike}
        onComment={handleComment}
      />
    </div>
  );
}

export default App;