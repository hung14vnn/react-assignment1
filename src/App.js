import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import PostPage from './pages/postpage';
import LoginPage from './pages/login';
import PostsBody from './pages/postsbody';
import ProfilePage from './pages/profilepage';
// import Navbar from "./components/Navbar/Navbar";

function App() {
  const isLoggedIn = localStorage.getItem('token');
  function Logout() {
    window.localStorage.clear;
  }
  return (
    <BrowserRouter>
      <div>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/posts">
          Posts
        </Link>
        <Link className="nav" to="/profile">
          Profile
        </Link>
        {isLoggedIn ? (
          <Link className="nav" to="/login" onClick={Logout}>
            Logout
          </Link>
        ) : (
          <Link className="nav" to="/login">
            Login
          </Link>
        )}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/posts/:id" element={<PostsBody />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
