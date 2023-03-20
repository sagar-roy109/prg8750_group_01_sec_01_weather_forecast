import React from 'react';

const PostRow = (props) => (
  <tr>
    {console.log('props', props)}
    <td>{props.img}</td>
    <td>{props.DOP}</td>
    <td>{props.title}</td>
    <td>{props.posttype}</td>
  </tr>
);

export default PostRow;
