import React, { useState } from 'react';
import bgBanner from '../assets/images/background/header-bg.png';
import About from '../components/HomePage/Content/About';
import Features from '../components/HomePage/Features/Features';
import Footer from '../components/HomePage/Footer/Footer';
import Hero from '../components/HomePage/Header/Hero';
import Nav from '../components/HomePage/Header/Nav';
import Simulation from '../components/HomePage/Simulation/Simulation';
import Testimonial from '../components/HomePage/Testimonial/Testimonial';
import Landing from '../components/Preloader/Landing';

const Home = () => {
	const [ preLoaderVisibility, setPreLoaderVisibility ] = useState(true);

	setTimeout(() => {
		setPreLoaderVisibility(false);
	}, 2500);

	return (
		<>
			{preLoaderVisibility ? (
				<div
					className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
					style={{
						backgroundImage: `url(${bgBanner})`
					}}
				>
					<Landing />
				</div>
			) : (
				<>
					<div
						className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
						style={{
							backgroundImage: `url(${bgBanner})`
						}}
					>
						<Nav />
						<Hero />
					</div>
					<About />
					<Features />
					<Simulation />
					<Testimonial />
					<Footer />
				</>
			)}
		</>
	);
};

export default Home;
