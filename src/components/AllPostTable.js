import React from 'react'
import { Link } from 'react-router-dom';

const AllPostTable = (props) => {
	const title = props.posts.title;
	const id = props.posts._id;
	// console.log(id);

	// const deleteData = (id)=> {
	// 	fetch(`http://localhost:5001/post-delete/:${id}`)
	// 	.then(res=>res.json())
	// 	.then(data => console.log(data));
	// }
	return (
		<>

				<tr>
					<td>1</td>
					<td>{title}</td>
					<td>date</td>
					<td>Title</td>
					<td>type</td>
					<td>
					<a className='btn btn-primary'>Edit</a>
					<a className='btn btn-danger' >Delete</a>

					</td>
				</tr>
		</>
	)
}

export default AllPostTable
