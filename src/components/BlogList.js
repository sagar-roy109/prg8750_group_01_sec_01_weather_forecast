import BlogGrid from './BlogsGrid';
import React, { useEffect, useState } from 'react';
function BlogList() {
  //fetch
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/all-post')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, [post]);

  //data []

  return (
    <div className='container blog-container'>
      <div className='row'>
        {post.map((singlePost) => (
          <div className='col-md-4'>
            <BlogGrid posts={singlePost}></BlogGrid>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
