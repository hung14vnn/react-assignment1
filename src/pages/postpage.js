import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
export default function PostPage() {
    const [data, setData] = useState();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setData(json));
    },100)
    return (
    
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data && data.map(post => (
            <TableRow
            key={post.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {post.id}
              </TableCell>
              <TableCell >{post.title}</TableCell>
              <TableCell ><Button variant="outlined" color="success"><Link to={`/posts/${post.id}`}>View</Link></Button></TableCell>
              <TableCell ><Button variant="outlined" color="error" onClick={()=>{setData(data.filter(item => item.id !== post.id))}}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    );
        
}
     