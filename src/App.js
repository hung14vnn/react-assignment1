import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter,Route, Routes, Link } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage";
import PostPage from "./pages/postpage";
import LoginPage from "./pages/login";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/posts">Posts</Link>
      <Link className="nav" to="/">Profile</Link>
      <Link className="nav" to="/login">Login</Link>
    </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<PostPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
