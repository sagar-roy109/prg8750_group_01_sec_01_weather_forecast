import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

function Add() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.forms.addPostForm;
    const addPost = {
      img: form.img.value,
      DOP: form.DOP.value,
      title: form.title.value,
      posttype: form.posttype.value,
    };
    const query = ` mutation Mutation { createPost(  img:"${addPost.img}", DOP:"${addPost.DOP}",
            title: "${addPost.title}",
            posttype: "${addPost.posttype}"
            ) {
                id
                img
                DOP
                title
                posttype
                
            }}`;
    console.log(query);
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    }).then(async function (response) {
      const body = response.json();
      console.log(body);
      window.location.replace('/dashboard');
    });
  };
  return (
    <Sidebar>
      <Form name='addPostForm' onSubmit={handleSubmit} className='round'>
        <div className='form-group'>
          <Form.Label htmlFor='img' className='form-label mt-4'>
            Image Name
          </Form.Label>
          <Form.Control
            type='text'
            className='form-control'
            id='img'
            name='img'
            placeholder='Enter Image Name'
            required
          />
        </div>

        <div className='form-group'>
          <Form.Label htmlFor='dateofpost' className='form-label mt-4'>
            Date Of Post
          </Form.Label>
          <Form.Control
            type='date'
            className='form-control'
            id='dop'
            name='DOP'
            required
          />
        </div>
        <div className='form-group'>
          <Form.Label htmlFor='title' className='form-label mt-4'>
            Post Title
          </Form.Label>
          <Form.Control
            type='text'
            className='form-control'
            id='title'
            name='title'
            placeholder='Enter Post title'
            required
          />
        </div>
        <div className='form-group'>
          <Form.Label htmlFor='posttype' className='form-label mt-4'>
            Post Type
          </Form.Label>
          <Form.Control
            type='text'
            className='form-control'
            id='posttype'
            name='posttype'
            placeholder='Enter Post Type'
            required
          />
        </div>

        <Button
          variant='secondary'
          type='submit'
          className='btn btn-primary addpost btnadd'
        >
          Add Post
        </Button>
      </Form>
    </Sidebar>
  );
}

export default Add;
