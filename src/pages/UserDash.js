import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




function UserDash() {
	const history = useNavigate();
	const [userData, setUserData] = useState({});
	const logout =()=>{
		window.localStorage.clear();
		window.location.href = "/login";
	}
	useEffect(() => {
		fetch("http://localhost:5001/user-details",{
			method: "POST",
			crossDomain: true,
			headers:{
				"Content-Type":"application/json",
				Accept:"application/json",
				"Access-Control-Allow-Origin":"*"
			},
			body:JSON.stringify({
				token:window.localStorage.getItem("token")
			}),

		}).then(res=>res.json())
		.then(data =>{
			setUserData(data.data)

		});

	}, [])




	return (
		<div>
			First name : {userData.fname}
			Last name : {userData.lname}
			Email: {userData.email}
			Password: {userData.password}

			<button onClick={logout} className='btn btn-primary'>Log Out</button>
		</div>
	)
}

export default UserDash
