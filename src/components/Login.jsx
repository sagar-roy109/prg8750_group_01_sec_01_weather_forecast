import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Loginimg from '../assets/login.jpg';

function Login() {
  return (
    <section className='Form my-4 mx-5'>
      <div className='container my-4 mx-5'>
        <div className='row '>
          <div className='col-lg-5'>
            <img src={Loginimg} alt='logo'></img>
          </div>
          <div className='col-lg-7 px-5 pt-5'>
            <h1 className='font-weight-bold py-3'> Welcome Back!</h1>
            <h2>Login into your account</h2>
            <form>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type={'email'}
                    placeholder='Enter your email'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type={'password'}
                    placeholder='Enter your Password'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <button type='button' className='btn1 mt-3 mb-3'>
                    Login
                  </button>
                </div>
              </div>
              <a href='#'>Forgot Password</a>
              <p>
                New user? <a href='#'>Register here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
