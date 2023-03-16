import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import registerimg from '../assets/loginfinal.jpg';

function Login() {
  return (
    <section className='Form '>
      <div className='container my-7 mx-7'>
        <div className='row no-gutters'>
          <div className='col-lg-5 px-4 py-4'>
            <img src={registerimg} className='img-fluid' alt='logo'></img>
          </div>
          <div className='col-lg-7 px-5 pt-4 '>
            <h1 className='font-weight-bold py-3'> Welcome, Register here!</h1>
            <h2>Register here</h2>
            <form>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type={'text'}
                    placeholder='Enter your First Name'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
              <div className='form-row'>
                <div className='col-lg-7'>
                  <input
                    type={'text'}
                    placeholder='Enter your Last Name'
                    className='form-control my-3 p-2'
                  ></input>
                </div>
              </div>
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
