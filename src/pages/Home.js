import React from 'react';
import bgBanner from '../assets/images/background/header-bg.png';
import About from '../components/HomePage/Content/About';
import Features from '../components/HomePage/Features/Features';
import Footer from '../components/HomePage/Footer/Footer';
import Hero from '../components/HomePage/Header/Hero';
import Nav from '../components/HomePage/Header/Nav';
import Simulation from '../components/HomePage/Simulation/Simulation';
import Testimonial from '../components/HomePage/Testimonial/Testimonial';

const Home = () => {

	document.title = 'অনুশীলন - ভার্চুয়াল সাইন্স ল্যাব';

	return (
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
	);
};

export default Home;
