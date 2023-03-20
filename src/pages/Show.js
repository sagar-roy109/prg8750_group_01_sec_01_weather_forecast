import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Show = () => {
  const [post, setPost] = useState({});
  const id = useParams().Id;
  const query = `query GetPosts{
  getPosts(id: "${id}") {
    id
    img
    title
    DOP
    posttype
    
  }
}`;
  useEffect(() => {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    }).then(async function (response) {
      const body = await response.json();
      console.log(body);
      setPost(body.data.getPosts);
    });
  }, []);
  return (
    <div>
      <h2 class='emp_data'>DashBoard</h2>
      <Table striped bordered hover variant='dark' className='table'>
        <thead>
          <tr>
            <th scope='col'>Image Name</th>
            <th scope='col'>Date of Post</th>
            <th scope='col'>Title</th>
            <th scope='col'>Post Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.img}</td>
            <td>{post.DOP}</td>
            <td>{post.title}</td>
            <td>{post.posttype}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Show;
