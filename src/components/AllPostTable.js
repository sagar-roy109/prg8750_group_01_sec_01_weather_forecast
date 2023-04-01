import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllPostTable = (props) => {
  const title = props.posts.title;
  const img = props.posts.img;
  const posttype = props.posts.posttype;
  const id = props.posts._id;
  const [image, setImage] = useState(null);

  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => {
      setImage(imgElement.src);
    };
  }, [img]);

  async function handleDelete(id) {
    //e.preventDefault();

    fetch(`http://localhost:5001/post-delete/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
      });
  }

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{image && <img src={image} alt={title} />}</td>
        <td>{title}</td>
        <td>{posttype}</td>
        <td>
          <button>
            <a className='btn btn-primary' href={`/edit/${id}`}>
              Edit
            </a>
          </button>
        </td>
        <td>
          <button className='btn btn-danger' onClick={() => handleDelete(id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllPostTable;
