import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

function BlogGrid() {
  return (
    <Card >
      <Card.Img variant="top" src="https://www.littlethings.info/wp-content/uploads/2014/04/dummy-image-green-e1398449160839.jpg" />
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
				<p className='text-right'> Published : 8/12/23 </p>

      </Card.Body>
    </Card>
  );
}

export default BlogGrid;
