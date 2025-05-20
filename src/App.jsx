import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import posts from './data/array';
import PostsPage from './pages/PostsPage';
import PostsContext from './context/PostsContext';
import { AlertProvider } from './context/AlertContext';

function App() {
  return (
    <PostsContext.Provider value={posts}>
      <AlertProvider>
        <PostsPage />
      </AlertProvider>
    </PostsContext.Provider>
  );
}

export default App;
