import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PostDirectory from '../pages/PostDirectory';
import Sidebar from '../components/Sidebar';
import AllPostTable from '../components/AllPostTable';

function EmployeeTable({ allEmployees }) {

  const [post, setPosts] = useState([]);
  const [TablePost, setTablePost] = useState([]);
  const [allPosts, setAllPosts] = React.useState([]);

	useEffect(() => {

		fetch('http://localhost:5001/all-post')
		.then(res=>res.json())
		.then(data => setPosts(data.posts));
	}, [post])

	// console.log(post);


  // const deleteMethod = (id, status) => {
  //   if (status) {
  //     alert('CAN’T DELETE ');
  //     return;
  //   }
  //   const query = `mutation Mutation{
  //       deletePost(id: "${id}")
  //       }`;
  //   console.log(query);
  //   fetch('http://localhost:4000/graphql', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ query }),
  //   }).then(async function (response) {
  //     const body = await response.json();
  //     console.log(body);
  //   });
  //   window.location.reload(false);
  // };

  // const actionTo = () =>
  //   allPosts.map((post, i) => (
  //     <tr key={i}>
  //       <th scope='row'>{i + 1}</th>
  //       <td>{post.img}</td>
  //       <td>{post.title}</td>
  //       <td>{post.DOP}</td>
  //       <td>{post.posttype}</td>
  //       <td>
  //         <Link to={`/view/${post.id}`}>
  //           <Button
  //             variant='secondary'
  //             type='button'
  //             className='btn btn-secondary mx-1'
  //           >
  //             {' '}
  //             VIEW{' '}
  //           </Button>
  //         </Link>
  //         &nbsp;
  //         <Link to={`/edit/${post.id}`}>
  //           <Button
  //             variant='secondary'
  //             type='button'
  //             className='btn btn-secondary mx-1'
  //           >
  //             {' '}
  //             EDIT{' '}
  //           </Button>
  //         </Link>
  //         <Button
  //           variant='secondary'
  //           type='button'
  //           className='btn btn-secondary mx-1'
  //           onClick={() => deleteMethod(post.id)}
  //         >
  //           {' '}
  //           DELETE{' '}
  //         </Button>
  //       </td>
  //     </tr>
  //   ));


		// logout button trigget
		const logout =()=>{
			window.localStorage.clear();
			window.location.href = "/login";
		}
  return (
    <Sidebar>
      <h1 class='emp_data'>Post Details</h1>
			<button onClick={logout} className='btn btn-primary'>Log Out</button>
      <Table className='table' striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Image</th>
            <th scope='col'>Date of Post</th>
            <th scope='col'>Title</th>
            <th scope='col'>Post Type</th>
						<th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>

					{
						post.map(singlePost => <AllPostTable posts = {singlePost } ></AllPostTable>)
					}

				</tbody>
      </Table>
    </Sidebar>
  );
}
export default EmployeeTable;
