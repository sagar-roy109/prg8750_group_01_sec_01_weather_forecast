import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Review from '../components/Review'
import Subscribe from '../components/Subscribe'

const Landing = () => {
	return (
		<>
			<Header></Header>
			<Hero></Hero>
			<Features></Features>
			<Review></Review>
			<Subscribe></Subscribe>
		</>
	)
}

export default Landing
