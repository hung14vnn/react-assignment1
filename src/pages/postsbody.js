import React from 'react';
import { useState, useEffect } from 'react';
import {useParams,Link} from 'react-router-dom';
export default function PostsBody() {
    const [data, setData] = useState();
    const postID = useParams().id
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/'+postID)
        .then(response => response.json())
        .then(json => setData(json));
    }   
    );
    return (
        <div>
        <ul>
        <div>ID: {data?.id}</div>
        <div>Details: {data?.body}</div> 
        </ul>
        <Link to="/">Go Home</Link>
    </div>
    );
  };