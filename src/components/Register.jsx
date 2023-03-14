import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import registerimg from '../assets/login2.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	async function submit(e){
		e.preventDefault();
		try{
			await axios.post("http://localhost:8001/register",{
				email,password
			})
			.then(res=>{
				if(res.data == "exist"){
					alert("User Already Exist Please login");
				}
				// else if(res.data == "notexist"){
				// 	history("")
				// }
			}
			)
			.catch(e=>{
				alert("Wrong details");
				console.log(e);
			})
		}
		catch(e){
			console.log(e);
		}
	}

// 	const history = useNavigate();
// 	const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
// 	const handleChange = (e) => {
// 		setInputs((prev) => ({
// 			...prev,
// 			[e.target.name]: e.target.value,
// 		}));

// 		console.log(e.target.value)
// 	};
// const sendRequest = async()=>{
// 	const res = await axios.post('http://localhost:5001/api/signup',{
// 		name: inputs.name,
// 		email: inputs.email,
// 		password: inputs.password
// 	}).catch(err => console.log(err));

// 	const data = await res.data;
// 	return data;
// }


// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	// send http request
// 	console.log('test');
// 	sendRequest().then(() => history("/login"));
// };
  return (
    <section className='Form '>
      <div className='container my-6 mx-6'>
        <div className='row no-gutters'>
          <div className='col-lg-7 px-5 pt-4 my-1 mx-6'>
            <h1 className='font-weight-bold py-3'> Welcome, Register here!</h1>
            <h2>Register here</h2>
            <form >
              {/* <div className='form-row'>
                <div className='col-lg-7'>
                  <input
										name="name"
										onChange={handleChange}
                    type={'text'}
										value = {inputs.name}
                    placeholder='Enter your First Name'
                    className='form-control my-3 p-2'
                  />
                </div>
              </div> */}

              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
									name="email"
									onChange={(e)=>{setEmail(e.target.value)}}
                    type={'email'}

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
