
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';


class Review extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
			<>
				<div className="review-section">
					<div className="container">
						<div className="header">
								<h2 className="title text-center">What Our User's Says</h2>
						</div>
						<Carousel>
        <div>
					<div className="review-details">
						<p>"This website is my go-to for checking the weather. Accurate forecasts and easy-to-use interface!"</p>
					</div>
					<div className="user-name">- John</div>
				</div>
				<div>
					<div className="review-details">
						<p>"Love the detailed hourly breakdowns on this website. Helps me plan my day accordingly."</p>
					</div>
					<div className="user-name">- John</div>
				</div>
				<div>
					<div className="review-details">
						<p>Highly recommend this website for anyone looking for up-to-date weather information. Never been disappointed.</p>
					</div>
					<div className="user-name">- John</div>
				</div>
				<div>
					<div className="review-details">
						<p>"Great website for tracking severe weather events. Appreciate the timely updates and alerts."</p>
					</div>
					<div className="user-name">- John</div>
				</div>

      </Carousel>
					</div>
				</div>
			</>

    )
  }
}
export default Review
