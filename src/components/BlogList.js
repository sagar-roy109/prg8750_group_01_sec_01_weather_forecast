import BlogGrid from './BlogsGrid';
import React, { useEffect, useState } from 'react';
const URL = process.env.REACT_APP_WEBSITE_URL
function BlogList() {
  //fetch
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${URL}/all-post`)
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
