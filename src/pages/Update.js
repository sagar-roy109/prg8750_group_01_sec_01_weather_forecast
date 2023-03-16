import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

function Update() {
  const [postType, setPostType] = useState('');
  const [posts, setposts] = useState({});
  const id = useParams().Id;
  const query = `query GetEmployees{
    getPosts(id: "${id}") {
      id
      img
      DOp
      title
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
      console.log(body.data.getEmployees);
      const data = body.data;
      if (data) {
        setposts(data.getPosts);
        setPostType(data.getPosts.PostType);
      }
    });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();
    const query = ` 
        mutation Mutation{
        updateEmployee(id: "${id}",img: "${posts.img}",title: "${posts.title}"){
            id
            img
            DOP
            title
            posttype
        }
      }
    `;
    console.log(query);
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    }).then(async function (response) {
      const body = await response.json();
      console.log(body);
      window.location.replace('/dashboard');
    });
  };
  return (
    <Sidebar>
      <div className='container'>
        <h1 class='emp_data'>Update Posts</h1>

        <Form className='row g-3' name='postCreate' onSubmit={formSubmit}>
          <div className='col-md-6'>
            <Form.Label htmlFor='img' className='form-label'>
              {' '}
              Image Name{' '}
            </Form.Label>
            <Form.Control
              type='text'
              className='form-control'
              value={posts.img}
            />
          </div>

          <div className='col-md-6'>
            <Form.Label htmlFor='title' className='form-label'>
              {' '}
              Title{' '}
            </Form.Label>
            <Form.Control
              type='text'
              className='form-control'
              value={posts.title}
            />
          </div>

          <div className='col-12'>
            <Form.Label htmlFor='DOP' className='form-label'>
              {' '}
              Date of Post{' '}
            </Form.Label>
            <Form.Control
              type='text'
              className='form-control'
              value={posts.DOP}
              disabled
            />
          </div>

          <div className='col-12'>
            <Form.Label htmlFor='posttype' className='form-label'>
              Post Type
            </Form.Label>
            <Form.Control
              type='text'
              aria-label='Default Selected'
              value={posts.posttype}
              disabled
            />
          </div>

          <div className='col-12'>
            <Button
              variant='secondary'
              type='submit'
              className='btn btn-primary btnadd'
            >
              UPDATE
            </Button>
          </div>
        </Form>
      </div>
    </Sidebar>
  );
}

export default Update;
