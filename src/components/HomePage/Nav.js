import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll, Link } from 'react-scroll';
import textLogo from '../../assets/images/text-logo.png';
import classes from './Navbar.module.css';

const Nav = () => {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);
	const [ scrolled, setScrolled ] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 20) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	let headerClasses = [ 'header' ];
	if (scrolled) {
		headerClasses.push(classes.scrolled);
	}

	return (
		<motion.div
			className={`${headerClasses.join(' ')}`}
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1
			}}
			transition={{
				duration: 1
			}}
		>
			<header className="top-0 w-full fixed">
				<nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
					<div className="relative flex items-center justify-between font-body">
						<div className="flex items-center">
							<Link to="/" className="inline-flex items-center mr-8" onClick={() => scroll.scrollToTop()}>
								<span
									className={`${scrolled
										? 'text-brand-900 hover:text-deep-purple-accent-700'
										: 'text-gray-50 hover:text-cyan-200'} text-3xl font-display font-black tracking-wider cursor-pointer`}
								>
									অনুশীলন
								</span>
							</Link>
							<ul className="items-center hidden space-x-8 lg:flex">
								<li>
									<Link
										to="simulation"
										spy={true}
										smooth={true}
										delay={100}
										offset={0}
										duration={500}
										activeClass={`${classes.active}`}
										className={`${scrolled
											? 'text-brand-900 hover:text-deep-purple-accent-700'
											: 'text-gray-50 hover:text-cyan-200'} transition-colors duration-200 font-medium tracking-wide cursor-pointer`}
									>
										আমাদের সিমুলেশন
									</Link>
								</li>
								<li>
									<Link
										to="features"
										spy={true}
										smooth={true}
										delay={100}
										offset={0}
										duration={500}
										activeClass={`${classes.active}`}
										className={`${scrolled
											? 'text-brand-900 hover:text-deep-purple-accent-700'
											: 'text-gray-50 hover:text-cyan-200'} transition-colors duration-200 font-medium tracking-wide cursor-pointer`}
									>
										আমাদের বৈশিষ্ট্য
									</Link>
								</li>
								<li>
									<Link
										to="/"
										spy={true}
										smooth={true}
										delay={100}
										offset={0}
										duration={500}
										activeClass={`${classes.active}`}
										className={`${scrolled
											? 'text-brand-900 hover:text-deep-purple-accent-700'
											: 'text-gray-50 hover:text-cyan-200'} transition-colors duration-200 font-medium tracking-wide cursor-pointer`}
									>
										লোকেরা যা বলছে
									</Link>
								</li>
								<li>
									<Link
										to="about"
										spy={true}
										smooth={true}
										delay={100}
										offset={0}
										duration={500}
										activeClass={`${classes.active}`}
										className={`${scrolled
											? 'text-brand-900 hover:text-deep-purple-accent-700'
											: 'text-gray-50 hover:text-cyan-200'} transition-colors duration-200 font-medium tracking-wide cursor-pointer`}
									>
										আমাদের সম্পর্কে
									</Link>
								</li>
							</ul>
						</div>
						<ul className="items-center hidden space-x-8 lg:flex">
							<li>
								<Link
									to="/"
									spy={true}
									smooth={true}
									delay={100}
									offset={0}
									duration={500}
									className={`${scrolled
										? 'text-brand-900 hover:text-deep-purple-accent-700'
										: 'text-gray-50 hover:text-cyan-200'} transition-colors duration-200 font-medium tracking-wide cursor-pointer`}
								>
									লগ ইন
								</Link>
							</li>
							<li>
								<Link
									to="/"
									className={`${scrolled
										? 'text-gray-50  hover:text-deep-purple-50 bg-brand-900 hover:bg-deep-purple-accent-700'
										: 'text-gray-50  hover:text-deep-purple-900 bg-brand-900 hover:bg-deep-purple-50'} inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide cursor-pointer transition duration-200 rounded shadow-md focus:cursor-pointer focus:shadow-outline focus:outline-none`}
									spy={true}
									smooth={true}
									delay={100}
									offset={0}
									duration={500}
								>
									জয়েন করো
								</Link>
							</li>
						</ul>
						<div className="lg:hidden">
							<button
								aria-label="Open Menu"
								title="Open Menu"
								className="p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
								onClick={() => setIsMenuOpen(true)}
							>
								<svg
									className={`${scrolled ? 'text-brand-900' : 'text-white'} w-5`}
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
									/>
									<path
										fill="currentColor"
										d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
									/>
									<path
										fill="currentColor"
										d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
									/>
								</svg>
							</button>

							{isMenuOpen && (
								<div className="absolute top-0 left-0 w-full">
									<div className="p-5 bg-white border rounded shadow-sm">
										<div className="flex items-center justify-between mb-4">
											<div>
												<Link
													to="/"
													spy={true}
													smooth={true}
													delay={100}
													offset={0}
													duration={500}
													className="inline-flex items-center"
												>
													<img className="h-10" src={textLogo} alt="Text Logo" />
												</Link>
											</div>
											<div>
												<button
													aria-label="Close Menu"
													title="Close Menu"
													className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
													onClick={() => setIsMenuOpen(false)}
												>
													<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
														<path
															fill="currentColor"
															d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
														/>
													</svg>
												</button>
											</div>
										</div>
										<nav>
											<ul className="space-y-4">
												<li>
													<Link
														to="simulation"
														spy={true}
														smooth={true}
														delay={100}
														offset={0}
														duration={500}
														activeClass={`${classes.active}`}
														className="font-medium tracking-wide text-brand-900 transition-colors duration-200 hover:text-deep-purple-900"
													>
														আমাদের সিমুলেশন
													</Link>
												</li>
												<li>
													<Link
														to="features"
														spy={true}
														smooth={true}
														delay={100}
														offset={0}
														duration={500}
														activeClass={`${classes.active} text-deep-purple-900 font-bold`}
														className="font-medium tracking-wide text-brand-900 transition-colors duration-200 hover:text-deep-purple-900"
													>
														আমাদের বৈশিষ্ট্য
													</Link>
												</li>
												<li>
													<Link
														to="/"
														spy={true}
														smooth={true}
														delay={100}
														offset={0}
														duration={500}
														activeClass={`${classes.active} text-deep-purple-900 font-bold`}
														className="font-medium tracking-wide text-brand-900 transition-colors duration-200 hover:text-deep-purple-900"
													>
														লোকেরা যা বলছে
													</Link>
												</li>
												<li>
													<Link
														to="about"
														spy={true}
														smooth={true}
														delay={100}
														offset={0}
														duration={500}
														activeClass={`${classes.active}`}
														className="font-medium tracking-wide text-brand-900 transition-colors duration-200 hover:text-deep-purple-900"
													>
														আমাদের সম্পর্কে
													</Link>
												</li>
												<li>
													<Link
														to="/"
														spy={true}
														smooth={true}
														delay={100}
														offset={0}
														duration={500}
														className="font-medium tracking-wide text-brand-900 transition-colors duration-200 hover:text-deep-purple-900"
													>
														লগ ইন
													</Link>
												</li>
												<li>
													<Link
														to="/"
														className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-brand-900  hover:bg-deep-purple-900 focus:shadow-outline focus:outline-none"
														spy={true}
														smooth={true}
														delay={100}
														offset={0}
														duration={500}
													>
														জয়েন করো
													</Link>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							)}
						</div>
					</div>
				</nav>
			</header>
		</motion.div>
	);
};

export default Nav;
