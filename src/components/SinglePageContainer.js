import React from 'react';
import SinglePost from './SinglePost';

function SinglePageContainer() {
  return (
    <>
      <div className='container single-post'>
        <div className='row'>
          <SinglePost></SinglePost>
        </div>
      </div>
    </>
  );
}

export default SinglePageContainer;
