import React from 'react';
import Loader from '../../assets/images/loader/landing.gif';

const Landing = () => {
	return (
		<div className="min-h-screen" style={{ backgroundColor: '#635BD3' }}>
			<div>
				<h2 className="text-center pt-10 pb-10 lg:pb-20 font-display text-3xl font-bold leading-10 lg:leading-normal tracking-wide text-white lg:text-5xl mx-auto hidden">
					অনুশীলন - ভার্চুয়াল সাইন্স ল্যাব
				</h2>
				<img src={Loader} alt="loader" className="pt-20 sm:pt-0 sm:h-screen mx-auto" />
			</div>
		</div>
	);
};

export default Landing;
