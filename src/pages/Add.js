import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Editor } from 'react-draft-wysiwyg';

function Add() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [posttype, setPosttype] = useState('');
	const URL = process.env.REACT_APP_WEBSITE_URL

  const addPost = (e) => {
    e.preventDefault();

    fetch(`${URL}/add-post`, {
      method: 'POST',
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
        console.log(data);
        console.log(data.status);
        window.location.replace('/user');
        //toast(data.status);
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
            <form
              onSubmit={addPost}
              encType='multipart/form-data'
              className='form-outline mb-4'
            >
              <div class='form-group'>
                <Form.Label htmlFor='title' className='form-label mt-4'>
                  Title
                </Form.Label>{' '}
                <input
                  type='text'
                  className='form-control'
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div class='form-group'>
                <Form.Label htmlFor='posttype' className='form-label mt-4'>
                  Post Description:
                </Form.Label>
                <textarea
                  type='text'
                  className='form-control'
                  cols='50'
                  rows='6'
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
                  /*onChange={(e) => {
                  setImg(e.target.filename);
                  console.log(img); // add this line*/
                  onChange={converttoBase64}
                />
                {img === '' || img == null ? (
                  ''
                ) : (
                  <img width={100} height={100} src={img} alt='article' />
                )}
              </div>

              <div class='form-check d-flex justify-content-center mb-4'>
                <button type='submit' className='btn btn-primary'>
                  Add Post
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
