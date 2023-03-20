import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import registerimg from '../assets/login2.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

	const [fname,setFname] = useState('');
	const [lname, setLname] =  useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	async function submit(e){
		e.preventDefault();

		fetch("http://localhost:5001/register",{
			method: "POST",
			crossDomain: true,
			headers:{
				"Content-Type":"application/json",
				Accept:"application/json",
				"Access-Control-Allow-Origin":"*"
			},
			body:JSON.stringify({
				fname,
				lname,
				email,
				password
			}),

		}).then(res=>res.json())
		.then(data =>{console.log(data)})
		// console.log (fname + lname + email + password);
		// try{
		// 	await axios.post("http://localhost:8001/register",{
		// 		email,password
		// 	})
		// 	.then(res=>{
		// 		if(res.data == "exist"){
		// 			alert("User Already Exist Please login");
		// 		}
		// 		// else if(res.data == "notexist"){
		// 		// 	history("")
		// 		// }
		// 	}
		// 	)
		// 	.catch(e=>{
		// 		alert("Wrong details");
		// 		console.log(e);
		// 	})
		// }
		// catch(e){
		// 	console.log(e);
		// }
	}

  return (
    <section className='Form '>
      <div className='container my-6 mx-6'>
        <div className='row no-gutters'>
          <div className='col-lg-7 px-5 pt-4 my-1 mx-6'>
            <h1 className='font-weight-bold py-3'> Welcome, Register here!</h1>
            <h2>Register here</h2>
            <form >
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
										name="fname"
										onChange={(e)=>setFname(e.target.value)}
                    type={'text'}
										value = {fname}
                    placeholder='Enter your First Name'
                    className='form-control my-3 p-2'
                  />
                </div>
              </div>
							<div className='form-row'>
                <div className='col-lg-7'>
                  <input
										name="lname"
										onChange={(e)=>setLname(e.target.value)}
                    type={'text'}
										value = {lname}
                    placeholder='Enter your Last Name'
                    className='form-control my-3 p-2'
                  />
                </div>
              </div>

              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
									name="email"
									onChange={(e)=>{setEmail(e.target.value)}}
                    type={'email'}
										value = {email}
                    placeholder='Enter your email'
                    className='form-control my-3 p-2'
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
									name="password"
									onChange={(e)=>{setPassword(e.target.value)}}
                    type={'password'}
										value = {password}
                    placeholder='Enter your Password'
                    className='form-control my-3 p-2'
                  />
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <button type='submit' onClick={submit} className='btn1 mt-3 mb-3'>
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
