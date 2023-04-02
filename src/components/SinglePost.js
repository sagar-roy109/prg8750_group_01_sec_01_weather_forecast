import React, { useEffect, useState } from 'react';

function SinglePost() {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [posttype, setPosttype] = useState('');
  const [postDetails, setPostDetails] = useState({});
  const path = window.location.pathname;
  const parts = path.split('/');
  const id = parts[parts.length - 1];
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5001/single-post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setImg(data.posts.img);
        setPosttype(data.posts.posttype);
        // toast(data.status);
      });
    console.log('posted');
  }, []);

  return (
    <>
      <div className='post-details'>
        <div className='post-image'>
          <img src={img} className='img-fluid' />
        </div>
        <div className='post-content'>
          <p>{posttype}</p>
        </div>
      </div>
    </>
  );
}

export default SinglePost;
