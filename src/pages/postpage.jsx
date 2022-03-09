import React from 'react';
import { Link } from 'react-router-dom';
export default function PostPage() {
  return (
    <div>
      <h1>Post Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        voluptate.
      </p>
      <Link to="/">Go Home</Link>
    </div>
  );
}