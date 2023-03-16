import React, { useEffect, useState } from 'react'


function DashTest() {
	const [userData, setUserData] = useState({});
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
		.then(data =>{setUserData(data.data)})
	}, [])




	return (
		<div>
			First name : {userData.fname}
			Last name : {userData.lname}
			Email: {userData.email}
			Password: {userData.password}
		</div>
	)
}

export default DashTest
