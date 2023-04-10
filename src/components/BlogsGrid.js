import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useEffect, useState } from 'react';

function BlogGrid(props) {
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
  return (
    <a href={`/single-post/${id}`}>
      <CardGroup className='card-group'>
        <Card className='card'>
          <Card.Img variant='top' src={img} alt = "Blog image" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{posttype}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </a>
  );
}

export default BlogGrid;
