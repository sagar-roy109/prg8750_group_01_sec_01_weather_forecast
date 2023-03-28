import React from 'react'
import Banner from '../assets/banner-min.jpg'
import weather from '../assets/weather.json'
import Lottie from 'lottie-react'
function Hero() {

	return (
		<div className="hero-section">
			{/* <img src={Banner} alt="Banner Image for weather application" /> */}

			<div className="container">
				<div className="row">
				<div className="col-md-8 col-sm-12">
						<h1 className='title'>From SNow to sunshine, We've got it all</h1>
						<a href="/application" className="button">Try Now</a>
				</div>
				<div className="col-md-4 col-sm-12">
					<div className="lottie">
					<Lottie className="lottie" animationData={weather}></Lottie>
					</div>
				</div>
				</div>



			</div>
		</div>
	)
}

export default Hero
