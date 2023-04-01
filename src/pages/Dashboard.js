import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostDirectory from '../pages/PostDirectory';
import Sidebar from '../components/Sidebar';
import AllPostTable from '../components/AllPostTable';
import Header from '../components/Header';

function PostTable() {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/all-post')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, [post]);

  // logout button trigget

  return (
    <div>
      <Header></Header>
      <Sidebar>
        <Table className='table' striped hover variant='primary'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Image</th>
              <th scope='col'>Title</th>
              <th scope='col'>Post Type</th>
              <th scope='col'>Action</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {post.map((singlePost) => (
              <AllPostTable posts={singlePost}></AllPostTable>
            ))}
          </tbody>
        </Table>
      </Sidebar>
    </div>
  );
}
export default PostTable;
