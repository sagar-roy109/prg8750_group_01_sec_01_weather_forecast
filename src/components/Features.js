import React from 'react'
import temp from '../assets/temp.json';
import sun from '../assets/sun.json';
import wind from '../assets/wind.json';
import Lottie from 'lottie-react'
import humidity from '../assets/humidity.json'
import email from '../assets/email.json'
import location from '../assets/location.json'

const Features = () => {
	return (
		<>
			<div className="features-container">
				<div className="header">
					<h2 className='text-center'> Features</h2>
					<p className='text-center'> Stay ahead of the storm with our accurate forecasts. </p>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<div className="image">
								<Lottie className="lottie" animationData={temp}></Lottie>
							</div>
							<p className="text text-center">daily temparature, feels like  temparature </p>
						</div>
						<div className="col-md-4 col-sm-12">

							<div className="image">
								<Lottie className="lottie" animationData={sun}></Lottie>
							</div>
							<p className="text text-center"> Sun Rise & Sun Set </p>
						</div>
						<div className="col-md-4 col-sm-12">
						<div className="image">
								<Lottie className="lottie" animationData={wind}></Lottie>
							</div>
							<p className="text text-center"> Wind Speed</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 col-sm-12">
							<div className="image">
								<Lottie className="lottie" animationData={humidity}></Lottie>
							</div>
							<p className="text text-center">Humidty update </p>
						</div>
						<div className="col-md-4 col-sm-12">

							<div className="image">
								<Lottie className="lottie" animationData={email}></Lottie>
							</div>
							<p className="text text-center">Daily Email Notification </p>
						</div>
						<div className="col-md-4 col-sm-12">
						<div className="image">
								<Lottie className="lottie" animationData={location}></Lottie>
							</div>
							<p className="text text-center"> Automatic location detection</p>
						</div>
					</div>
					<div className="btn-container">
						<a href="/application" className="button"> Try Now</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Features
