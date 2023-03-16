import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Loginimg from '../assets/fall.jpg';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

	const history = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function submit(e){
		e.preventDefault();
		fetch("http://localhost:5001/login",{
			method: "POST",
			crossDomain: true,
			headers:{
				"Content-Type":"application/json",
				Accept:"application/json",
				"Access-Control-Allow-Origin":"*"
			},
			body:JSON.stringify({
				email,
				password
			}),

		}).then(res=>res.json())
		.then(data =>{

			console.log(data);
			if(data.status == "ok"){
				alert("Login Successful");
				window.localStorage.setItem("token", data.data);
				history("/user");
			}
		})

		// try{
		// 	await axios.post("http://localhost:8001/login",{
		// 		email,password
		// 	})
		// 	.then(res=>{
		// 		let userpassword = res.data[0].password

		// 		// if(res.data == "exist"){
		// 		// 	// history("/user",{state:{id:email}})

		// 		// }
		// 		if(res.data == "notexist"){
		// 			alert("User not exist. Please Register")
		// 		}else{
		// 			if(password == userpassword){
		// 				history("/user",{state:{id:email}})
		// 			}else{
		// 				alert("Wrong Password")
		// 			}
		// 		}
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
    <section className='Form my-4 mx-5'>
      <div className='container my-4 mx-5'>
        <div className='row '>
          <div className='col-lg-5 px-5 pt-5'>
            <img src={Loginimg} className='img-fluid' alt='logo'></img>
          </div>
          <div className='col-lg-7 px-5 pt-4'>
            <h1 className='font-weight-bold py-3'> Welcome Back!</h1>
            <h2>Login into your account</h2>
            <form>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
									name='email'
									onChange={(e)=>{setEmail(e.target.value)}}
									value={email}
									type={'email'}
                    placeholder='Enter your email'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
									name='password'
									value={password}
                    type={'password'}
										onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder='Enter your Password'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <button type='submit' className='btn1 mt-3 mb-3' onClick={submit}>
                    Login
                  </button>
                </div>
              </div>
              {/* <a href='#'>Forgot Password</a> */}
              <p>
                New user? <a href='/register'>Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
