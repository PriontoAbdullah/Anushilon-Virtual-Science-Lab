import React from 'react';
import logoBanner from '../../assets/images/banner/logo-banner.png';

const About = () => {
	return (
		<section id="about" data-aos="fade-up">
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="grid gap-12 row-gap-8 lg:grid-cols-2">
					<div className="flex flex-col justify-center">
						<div className="max-w-xl mb-6">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
								The quick, brown fox
								<br className="hidden md:block" />
								jumps over <span className="inline-block text-brand-900">a lazy dog</span>
							</h2>
							<p className="text-base text-gray-700 md:text-lg">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
							</p>
						</div>
						<div className="grid gap-8 row-gap-8 sm:grid-cols-2">
							<div>
								<div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
									<svg className="w-10 h-10 text-brand-900" stroke="currentColor" viewBox="0 0 52 52">
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
								<h6 className="mb-2 font-semibold leading-5">I'll be sure to note that in my log</h6>
								<p className="text-sm text-gray-900">
									Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly got in a gaum Powrtland stove up
									dooryahd
								</p>
							</div>
							<div>
								<div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
									<svg className="w-10 h-10 text-brand-900" stroke="currentColor" viewBox="0 0 52 52">
										<polygon
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
											fill="none"
											points="29 13 14 29 25 29 23 39 38 23 27 23"
										/>
									</svg>
								</div>
								<h6 className="mb-2 font-semibold leading-5">
									Iterative approaches to corporate strategy
								</h6>
								<p className="text-sm text-gray-900">
									A slice of heaven. O for awesome, this chocka full cuzzie is as rip-off as a
									cracker.
								</p>
							</div>
						</div>
					</div>
					<div>
						<img
							className="object-cover w-full h-full rounded shadow-lg "
							src={logoBanner}
							alt="logo-banner"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
