import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import bgFooter from '../../../assets/images/background/footer-bg.png';

const Footer = () => {
	return (
		<footer
			className="min-h-auto bg-cover bg-no-repeat bg-center"
			data-aos="fade-up"
			style={{
				backgroundImage: `url(${bgFooter})`
			}}
		>
			<div className="px-4 pt-20 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<Fade top>
				<div className="grid grid-cols-2 gap-10 mb-3 sm:grid-cols-3 lg:grid-cols-12 lg:gap-20">
					<div className="col-span-4">
						<a href="/" aria-label="Go home" title="অনুশীলন" className="inline-flex items-center">
							<span className="ml-2 text-2xl font-display font-bold tracking-wide text-white uppercase">
								অনুশীলন
							</span>
						</a>
						<div className="mt-6 lg:max-w-sm font-body">
							<p className="text-sm text-indigo-50">
								নবম থেকে দ্বাদশ শ্রেণির পদার্থবিজ্ঞান, রসায়ন ও জীববিজ্ঞান বিষয়ের সকল ল্যাব এক্সপেরিমেন্ট
								এবং বিজ্ঞান চর্চার সকল সিমুলেশন এখন সবসময়, সম্পূর্ণ বিনামূল্যে।
							</p>
						</div>
					</div>

					<div className="col-span-2 lg:col-span-3 space-y-2 text-sm font-body">
						<p className="text-base font-semibold tracking-wide text-white">যোগাযোগ</p>
						<div className="flex flex-wrap">
							<p className="mr-1 mb-1 text-indigo-50">ফোন</p>
							<a
								href="tel:+880-1790-123456"
								className="transition-colors duration-300 text-gray-50 hover:text-cyan-200"
							>
								+৮৮০-১৭৯০-১২৩৪৫৬
							</a>
						</div>
						<div className="flex flex-wrap">
							<p className="mr-1 mb-1 text-indigo-50">ইমেল:</p>
							<a
								href="mailto:info@anushilon.com"
								className="transition-colors duration-300 text-gray-50 hover:text-cyan-200"
							>
								ইনফো@অনুশীলন.কম
							</a>
						</div>
						<div className="flex flex-wrap">
							<p className="mr-1 mb-1 text-indigo-50">ঠিকানা:</p>
							<a
								href="https://www.google.com/maps"
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors duration-300 text-gray-50 hover:text-cyan-200"
							>
								ঢাকা, বাংলাদেশ - ১২০৫
							</a>
						</div>
					</div>
					<div className="col-span-1 lg:col-span-2 space-y-2 text-sm font-body">
						<p className="text-base font-semibold tracking-wide text-white">বিভাগ সমূহ</p>
						<ul className="mt-2 space-y-2">
							<li>
								<Link
									to="simulation"
									smooth={true}
									className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200 cursor-pointer"
								>
									আমাদের সিমুলেশন
								</Link>
							</li>
							<li>
								<Link
									to="about"
									smooth={true}
									className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200 cursor-pointer"
								>
									আমাদের বৈশিষ্ট্য
								</Link>
							</li>
							<li>
								<Link
									to="testimonial"
									smooth={true}
									className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200 cursor-pointer"
								>
									লোকেরা যা বলছে
								</Link>
							</li>
							<li>
								<Link
									to="about"
									smooth={true}
									className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200 cursor-pointer"
								>
									আমাদের সম্পর্কে
								</Link>
							</li>
						</ul>
					</div>

					<div className="col-span-3">
						<span className="text-base font-semibold font-body tracking-wide text-white">
							সামাজিক মাধ্যম
						</span>
						<div className="flex items-center mt-1 space-x-3">
							<a href="/" className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200">
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
									<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
								</svg>
							</a>
							<a href="/" className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200">
								<svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
									<circle cx="15" cy="15" r="4" />
									<path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
								</svg>
							</a>
							<a href="/" className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200">
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
									<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
								</svg>
							</a>
							<a
								href="/"
								className="text-indigo-50 transition-colors duration-300 hover:text-cyan-200 mt-2"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="35"
									height="35"
									fill="currentColor"
									className="bi bi-youtube"
									viewBox="0 0 24 24"
								>
									<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
								</svg>
							</a>
						</div>
						<p className="mt-2 font-body text-sm text-indigo-50">
							আমরা বিশ্বাস করি যে অনুশীলন প্রযুক্তিগত আধুনিক বিজ্ঞান শিক্ষার জন্য অবকাঠামোগত অভাবের সমাধান
							হতে পারে।
						</p>
					</div>
				</div>
				<div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-50 lg:flex-row font-body">
					<p className="text-sm font-medium text-gray-400 tracking-wide">
						&copy; কপিরাইট <span className="font-display font-semibold text-gray-200">২০২১</span> অনুশীলন
						কতৃক সমস্ত অধিকার সংরক্ষিত।
					</p>
					<ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
						<li>
							<a
								href="/"
								className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-cyan-200"
							>
								সচরাচর জিজ্ঞাস্য
							</a>
						</li>
						<li>
							<a
								href="/"
								className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-cyan-200"
							>
								গোপনীয়তা নীতি
							</a>
						</li>
						<li>
							<a
								href="/"
								className="text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-cyan-200"
							>
								শর্তাদি &amp; শর্তসমূহ
							</a>
						</li>
					</ul>
				</div>
				</Fade>
			</div>
	
		</footer>
	);
};

export default Footer;
