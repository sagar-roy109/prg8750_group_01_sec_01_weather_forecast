import React from 'react';
import sagar from '../assets/sagar.jpg';
import ajay from '../assets/ajay.jpg';
import teja from '../assets/teja.jpg';
import monica from '../assets/monica.jpg';
import Header from '../components/Header';

const Developers = () => {
  const developersData = [
    {
      name: 'Sagar Roy',
      email: 'sroy.dev109@gmail.com',
      bio: 'John is a skilled front-end developer with expertise in HTML, CSS, and JavaScript. He has a passion for creating user-friendly and visually appealing user interfaces.',
      avatar: sagar, // URL to the developer's avatar image
    },
    {
      name: 'Tejaswini Nallapaneni',
      email: 'nallapanenitejaswini1997@gmail.com',
      bio: 'Jane is a back-end developer with a strong background in server-side technologies such as Node.js, Express, and MongoDB. She enjoys building scalable and robust APIs.',
      avatar: teja, // URL to the developer's avatar image
    },
    {
      name: 'Sai Monica Turlapati',
      email: 'saimonicaturlapati@gmail.com',
      bio: 'Jane is a back-end developer with a strong background in server-side technologies such as Node.js, Express, and MongoDB. She enjoys building scalable and robust APIs.',
      avatar: monica, // URL to the developer's avatar image
    },
    {
      name: 'Ajay Kumar Nallamothu',
      email: 'ajayignited@gmail.com',
      bio: 'Jane is a back-end developer with a strong background in server-side technologies such as Node.js, Express, and MongoDB. She enjoys building scalable and robust APIs.',
      avatar: ajay, // URL to the developer's avatar image
    },
  ];

  return (
    <div>
      <Header></Header>
			<div className="container mt-5">
			<h2>About the Developers</h2>
			</div>

			<div className="container mt-5 mb-5">
				<div className="row">
				{developersData.map((developer, index) => (

				<div className='image-container col-md-6' key={index}>
				<div class='image-wrapper'>
					<img src={developer.avatar} alt={developer.name} />
					<div class='image-info'>
						<h4>{developer.name}</h4>
						<h6>{developer.email}</h6>

			</div>
				</div>
			</div>

		))}
				</div>
			</div>

    </div>
  );
};

export default Developers;
