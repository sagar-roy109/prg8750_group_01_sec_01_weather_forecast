import React from 'react'
import { useLocation } from 'react-router-dom'

function DashTest() {
	const location = useLocation();

	return (
		<div>
			{location.state.id};
		</div>
	)
}

export default DashTest
