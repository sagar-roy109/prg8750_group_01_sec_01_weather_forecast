import React from 'react'
import email from '../assets/email.json';
import Lottie from 'lottie-react'

const Subscribe = () => {
	return (
		<>
			<div className='subscribe-section'>
				<div className="container">
					<div className="row">
						<div className="col-12 subscribe-header">
								<h2 className="text-center">Subscribe to get an update</h2>
								<p className='text-center'>Get weather notification in your email !</p>
								<Lottie animationData={email} className="lottie"></Lottie>
						</div>
					</div>
					<div className="row">
						<form className="form-inline d-flex justify-content-between ">
							<div className="form-group mb-2">
								<label for="staticEmail2" >Email</label>
								<input type="text" className="form-control"  />
							</div>
							<div className="form-group  mb-2">
								<label for="inputPassword2">City</label>
								<input type="text" className="form-control"  />
							</div>

							<button type="submit" className="btn btn-primary mb-2">Subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Subscribe
