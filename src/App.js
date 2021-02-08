import React from 'react';
import Post from './facebook-post';
import './App.css';
function App() {
  return (
    <div>
        <h1>Facebook Posts</h1>
        <Post author="Andrea" description="Ciao sono Andrea" />
        <Post author="Rob" description="Ciao sono Rob" />
        <Post author="Jack" description="Ciao sono Jack" />
    </div>
  );
}

export default App;
