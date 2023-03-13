import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import registerimg from '../assets/login2.jpg';

function Login() {

	const [inputs, setInputs] = useState({
		name : '',
		email: '',
		password: ''
	})
  return (
    <section className='Form '>
      <div className='container my-6 mx-6'>
        <div className='row no-gutters'>
          <div className='col-lg-7 px-5 pt-4 my-1 mx-6'>
            <h1 className='font-weight-bold py-3'> Welcome, Register here!</h1>
            <h2>Register here</h2>
            <form>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type={'text'}
										value = {inputs.name}
                    placeholder='Enter your First Name'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>

              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type={'email'}
										value = {inputs.email}
                    placeholder='Enter your email'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type={'password'}
										value = {inputs.password}
                    placeholder='Enter your Password'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <button type='button' className='btn1 mt-3 mb-3'>
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
