import React from 'react';
import bgBanner from '../assets/images/background/header-bg.png';
import About from '../components/HomePage/About';
import Header from '../components/HomePage/Header';
import Nav from '../components/HomePage/Nav';

const Home = () => {
	return (
		<>
			<div
				className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url(${bgBanner})`
				}}
			>
				<Nav />
				<Header />
			</div>
			<About />
		</>
	);
};

export default Home;
