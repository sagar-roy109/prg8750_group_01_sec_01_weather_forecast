import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Loginimg from '../assets/fall.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import weather from '../assets/weather.json'
import Lottie from 'lottie-react'






function ResetComponent() {
	console.log(process.env.REACT_APP_WEBSITE_URL);

	const URL = process.env.REACT_APP_WEBSITE_URL+'/forgot-password';
	console.log(URL)

	const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	async function submit(e){
		e.preventDefault();
		fetch(URL,{
			method: "POST",
			crossDomain: true,
			headers:{
				"Content-Type":"application/json",
				Accept:"application/json",
				"Access-Control-Allow-Origin":"*"
			},
			body:JSON.stringify({
				email,
			}),

		}).then(res=>res.json())
		.then(data =>{
			console.log(data);
			toast(data.status);
		})

	}


  return (
    <section className='Form  reset-from'>
      <div className='container '>
        <div className='row '>
          <div className='col-md-4'>
					<Lottie className="lottie" animationData={weather}></Lottie>
          </div>
          <div className='col-md-8'>
            <h1 className='font-weight-bold py-3'> Welcome Back!</h1>
            <h2>Reset Your Password</h2>
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
                  <button type='submit' className='btn1 mt-3 mb-3' onClick={submit}>
                    Submit
                  </button>
                </div>
              </div>
							<ToastContainer toastStyle={{ backgroundColor: "black", color:"white" }}  />

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
export default ResetComponent;
