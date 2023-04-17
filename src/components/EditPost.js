import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Add() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [posttype, setPosttype] = useState('');
  const path = window.location.pathname;
  const parts = path.split('/');
  const id = parts[parts.length - 1];
  const [postDetails, setPostDetails] = useState({});
	const URL = process.env.REACT_APP_WEBSITE_URL

  useEffect(() => {
    fetch(`${URL}/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setPostDetails(data.posts);
        // toast(data.status);
      });

    console.log('posted');
  }, []);

  const editPost = (e) => {
    e.preventDefault();

    fetch(`${URL}/edit/${id}`, {
      method: 'PUT',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        base64: img,
        title,
        posttype,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
        console.log(data.posts);
        window.location.replace('/user');
        // toadata.status);
      });

    console.log('posted');
  };
  function converttoBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log('error:', error);
    };
  }
  return (
    <div>
      <Header></Header>
      <Sidebar>
        {
          <div className='addstyle'>
            <form onSubmit={editPost} className='round'>
              <div class='form-group'>
                <Form.Label htmlFor='dateofpost' className='form-label mt-4'>
                  Title
                </Form.Label>{' '}
                <input
                  type='text'
                  className='form-control'
                  placeholder={postDetails.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class='form-group'>
                <Form.Label htmlFor='dateofpost' className='form-label mt-4'>
                  Post Description
                </Form.Label>
                <textarea
                  type='text'
                  className='form-control'
                  cols='50'
                  rows='6'
                  placeholder={postDetails.posttype}
                  onChange={(e) => setPosttype(e.target.value)}
                />
              </div>
              <div class='form-group'>
                <Form.Label htmlFor='img' className='form-label mt-4'>
                  Img
                </Form.Label>

                <input
                  type='file'
                  filename='img'
                  accept='image/jpeg,image/png,image/gif'
                  className='form-control'
                  onChange={converttoBase64}
                />
                {img === '' || img == null ? (
                  ''
                ) : (
                  <img width={100} height={100} src={img} alt='article' />
                )}
              </div>

              <div class='full-width'>
                <button type='submit' className='btn btn-primary'>
                  Edit Post
                </button>
              </div>
            </form>
          </div>
        }
      </Sidebar>
    </div>
  );
}

export default Add;
