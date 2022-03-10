import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function PostPage() {
    const [data, setData] = useState();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json));
    })
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td><Link to={`/posts/${post.id}`}>View</Link></td>
              <td><button onClick={()=>{setData(data.filter(item => item.id !== post.id))}}>Delete</button></td>
            </tr>
          ))}
        </tbody>

      </table>
    );
        
}
     