import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostDirectory from '../pages/PostDirectory';

function EmployeeTable({ allEmployees }) {
  const [post, setPosts] = useState([]);
  const [TablePost, setTablePost] = useState([]);
  const [allPosts, setAllPosts] = React.useState([]);

  const deleteMethod = (id, status) => {
    if (status) {
      alert('CAN’T DELETE ');
      return;
    }
    const query = `mutation Mutation{
        deletePost(id: "${id}")
        }`;
    console.log(query);
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    }).then(async function (response) {
      const body = await response.json();
      console.log(body);
    });
    window.location.reload(false);
  };

  const actionTo = () =>
    allPosts.map((post, i) => (
      <tr key={i}>
        <th scope='row'>{i + 1}</th>
        <td>{post.img}</td>
        <td>{post.title}</td>
        <td>{post.DOP}</td>
        <td>{post.posttype}</td>
        <td>
          <Link to={`/view/${post.id}`}>
            <Button
              variant='secondary'
              type='button'
              className='btn btn-secondary mx-1'
            >
              {' '}
              VIEW{' '}
            </Button>
          </Link>
          &nbsp;
          <Link to={`/edit/${post.id}`}>
            <Button
              variant='secondary'
              type='button'
              className='btn btn-secondary mx-1'
            >
              {' '}
              EDIT{' '}
            </Button>
          </Link>
          <Button
            variant='secondary'
            type='button'
            className='btn btn-secondary mx-1'
            onClick={() => deleteMethod(post.id)}
          >
            {' '}
            DELETE{' '}
          </Button>
        </td>
      </tr>
    ));
  return (
    <div>
      <h1 class='emp_data'>Post Details</h1>
      <Table className='table' striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Image</th>
            <th scope='col'>Date of Post</th>
            <th scope='col'>Title</th>
            <th scope='col'>Post Type</th>
          </tr>
        </thead>
        <tbody>{actionTo()}</tbody>
      </Table>
    </div>
  );
}
export default EmployeeTable;
