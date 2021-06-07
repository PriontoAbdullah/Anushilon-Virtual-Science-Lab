import React from 'react';
import styled from 'styled-components';
import WordsFading from '../MicroComponent/WordsFading';

const Wrapper = styled.div`
	width: 195px;
	display: inline-block;
	text-align: center;
	transition: 0.2s ease-out;
	& span {
		text-align: center;
		width: 100%;
	}
	@media (max-width: 1023px) {
		width: 122px;
		font-size: 30px;
		line-height: 45px;
	}
`;

const Hero = () => {
	return (
		<section className="px-5 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
			<div className="max-w-xl sm:mx-auto lg:max-w-7xl">
				<div className="flex flex-col text-center">
					<div className="max-w-xl my-14 md:mx-auto lg:max-w-4xl md:my-28">
						<h2 className="max-w-2xl mb-10 lg:mb-20 font-display text-3xl font-bold leading-10 lg:leading-normal tracking-wide text-white lg:text-5xl mx-auto">
							বাংলাদেশের{' '}
							<span className="relative">
								<Wrapper>
									<WordsFading />
								</Wrapper>{' '}
							</span>
							<br /> ভার্চুয়াল সাইন্স ল্যাবে স্বাগতম
							<span className="font-normal">!</span>
						</h2>
						<p className="font-body text-lg md:leading-10 text-indigo-50 md:text-2xl">
							নবম থেকে দ্বাদশ শ্রেণির পদার্থবিজ্ঞান, রসায়ন ও জীববিজ্ঞান বিষয়ের সকল ল্যাব এক্সপেরিমেন্ট এবং
							বিজ্ঞান চর্চার সকল সিমুলেশন এখন সবসময়, সম্পূর্ণ বিনামূল্যে
							<span className="font-light ml-1">!</span>
						</p>
					</div>
					<div>
						<a
							href="/"
							className="inline-flex items-center justify-center h-12 px-8 md:h-16 md:px-10 font-bold text-base md:text-xl tracking-wider text-gray-200 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-brand-900 hover:bg-deep-purple-100 focus:shadow-outline focus:outline-none"
						>
							আমাদের যা আছে
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
