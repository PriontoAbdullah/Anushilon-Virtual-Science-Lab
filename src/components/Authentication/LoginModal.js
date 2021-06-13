import { faEnvelope, faLock, faUnlock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Slide from 'react-reveal/Slide';
import loginLoader from '../../assets/images/loader/login.gif';
import signInLoader from '../../assets/images/loader/signIn.gif';

const LoginModal = (props) => {
	const handleCloseModal = () => {
		props.setShowHeader('block');
		props.setShowLoginModal(false);
	};

	return (
		<div>
			<div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
				<div
					className={`relative w-full mt-16 ${!props.newUser
						? 'lg:mt-12 2xl:mt-14'
						: 'lg:mt-4 2xl:mt-6'} flex max-w-sm md:max-w-lg lg:max-w-4xl 2xl:max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl`}
				>
					{/* Left Side Animations */}
					<div className="hidden lg:block lg:w-1/2 bg-brand-900">
						{!props.newUser ? (
							<img
								src={loginLoader}
								alt="login-loader"
								className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
							/>
						) : (
							<img
								src={signInLoader}
								alt="signIn-loader"
								className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
							/>
						)}
					</div>
					{/* Right Side Forms */}
					<div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
						{/* Close Button */}
						<button className="close-button " type="button" onClick={handleCloseModal}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-circle-x"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<circle cx="12" cy="12" r="9" />
								<path d="M10 10l4 4m0 -4l-4 4" />
							</svg>
						</button>

						{!props.newUser ? (
							<>
								{/* LogIn Header */}
								<div>
									<h2 className="text-2xl ml-4 mb-2 font-display text-center font-bold text-brand-900">
										অনুশীলন
									</h2>
									<p className="text-lg font-body text-center text-gray-600 ">
										ফিরে আসার জন্য স্বাগতম!
									</p>
								</div>

								<Slide bottom>
									<div className="flex items-center justify-center mt-3 mb-5 text-brand-900 rounded-lg shadow-md hover:bg-deep-purple-50 hover:text-deep-purple-500 cursor-pointer">
										<div className="px-4 py-3">
											<svg className="w-6 h-6" viewBox="0 0 40 40">
												<path
													d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
													fill="#FFC107"
												/>
												<path
													d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
													fill="#FF3D00"
												/>
												<path
													d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
													fill="#4CAF50"
												/>
												<path
													d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
													fill="#1976D2"
												/>
											</svg>
										</div>
										{/* Google SignIn Button */}
										<span className="w-5/6 px-4 py-3 pr-20 font-semibold font-body text-base text-center">
											গুগল দিয়ে সাইন ইন করুন
										</span>
									</div>
								</Slide>
								<Slide bottom>
									<div className="flex items-center justify-between mt-4">
										<span className="w-1/5 border-b lg:w-1/4" />
										<span className="text-xs text-center text-gray-600 font-medium font-body tracking-wider uppercase">
											অথবা ইমেইল দিয়ে লগ ইন করুন
										</span>
										<span className="w-1/5 border-b lg:w-1/4" />
									</div>
									{/* LogIn Form */}
									<div className="mt-4 font-body">
										<label
											className="block mb-2 text-base font-medium text-gray-700"
											htmlFor="LoggingEmailAddress"
										>
											ইমেইল
										</label>
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<span className="login-icon">
												<FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
											</span>
											<input
												id="LoggingEmailAddress"
												name="email"
												type="email"
												className="login-input"
												placeholder="আপনার ইমেইল প্রদান করুন"
											/>
										</div>
									</div>

									<div className="mt-4 font-body">
										<div className="flex justify-between">
											<label
												className="block mb-2 text-base font-medium text-gray-700"
												htmlFor="loggingPassword"
											>
												পাসওয়ার্ড
											</label>
											<span className="text-xs  text-gray-600 cursor-pointer hover:text-deep-purple-accent-700 tracking-wide">
												পাসওয়ার্ড ভুলে গেছেন?
											</span>
										</div>
										<div className="relative flex w-full flex-wrap items-stretch mb-3">
											<span className="login-icon">
												<FontAwesomeIcon icon={faLock} className="text-gray-500" />
											</span>
											<input
												id="loggingPassword"
												name="password"
												type="password"
												className="login-input"
												placeholder="আপনার পাসওয়ার্ড প্রদান করুন "
											/>
										</div>
									</div>

									<div className="mt-8">
										<button className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900">
											লগ ইন
										</button>
									</div>

									<div className="flex items-center justify-between mt-4">
										<span className="w-1/5 border-b  md:w-1/4" />

										<span
											className="text-base text-brand-900 font-semibold font-body uppercase cursor-pointer hover:text-deep-purple-accent-700"
											onClick={() => props.setNewUser(true)}
										>
											অথবা রেজিস্ট্রেশন করুন
										</span>
										<span className="w-1/5 border-b md:w-1/4" />
									</div>
								</Slide>
							</>
						) : (
							<>
								<div>
									{/* Registration Header*/}
									<h2 className="text-2xl ml-4 mb-2 font-display text-center font-bold text-brand-900">
										অনুশীলন
									</h2>
									<p className="text-lg font-body text-center text-gray-600 ">
										নতুন ব্যবহারকারী হিসাবে নিবন্ধন করুন
									</p>
								</div>

								<Slide bottom>
									<div className="mt-3 mb-0 font-body flex flex-wrap justify-center items-center">
										<label className="inline-flex items-center">
											<span className="text-base text-gray-700 font-body mr-3 font-medium">
												আমি একজন{' '}
											</span>
										</label>
										<label className="inline-flex items-center cursor-pointer">
											<input
												type="radio"
												className="form-radio ring-brand-900 text-brand-900"
												name="accountType"
												value="student"
												defaultChecked
											/>
											<span className=" text-gray-700 ml-2 font-body">শিক্ষার্থী</span>
										</label>
										<label className="inline-flex items-center ml-3 cursor-pointer">
											<input
												type="radio"
												className="form-radio ring-brand-900"
												name="accountType"
												value="teacher"
											/>
											<span className=" text-gray-700 ml-2 font-body"> শিক্ষক </span>
										</label>
									</div>
									{/* Registration Form*/}
									<div className="mt-1 font-body">
										<label
											className="block mb-2 text-base font-medium text-gray-700"
											htmlFor="SignInUserName"
										>
											নাম
										</label>
										<div class="relative flex w-full flex-wrap items-stretch mb-3">
											<span className="login-icon">
												<FontAwesomeIcon icon={faUser} className="text-gray-500" />
											</span>
											<input
												id="SignInUserName"
												name="name"
												type="text"
												className="login-input"
												placeholder="আপনার নাম প্রদান করুন"
											/>
										</div>
									</div>

									<div className="mt-4 font-body">
										<label
											className="block mb-2 text-base font-medium text-gray-700"
											htmlFor="SignInEmailAddress"
										>
											ইমেইল
										</label>
										<div class="relative flex w-full flex-wrap items-stretch mb-3">
											<span class="login-icon">
												<FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
											</span>
											<input
												id="SignInEmailAddress"
												name="email"
												type="email"
												className="login-input"
												placeholder="আপনার ইমেইল প্রদান করুন"
											/>
										</div>
									</div>

									<div className="mt-4 font-body">
										<div className="flex justify-between">
											<label
												className="block mb-2 text-base font-medium text-gray-700"
												htmlFor="SignInPassword"
											>
												পাসওয়ার্ড
											</label>
										</div>
										<div class="relative flex w-full flex-wrap items-stretch mb-3">
											<span class="login-icon">
												<FontAwesomeIcon icon={faLock} className="text-gray-500" />
											</span>
											<input
												id="SignInPassword"
												name="password"
												type="password"
												className="login-input"
												placeholder="আপনার পাসওয়ার্ড প্রদান করুন "
											/>
										</div>
									</div>

									<div className="mt-4 font-body">
										<div className="flex justify-between">
											<label
												className="block mb-2 text-base font-medium text-gray-700"
												htmlFor="SignInPasswordAgain"
											>
												পাসওয়ার্ড যাচাই
											</label>
										</div>
										<div class="relative flex w-full flex-wrap items-stretch mb-3">
											<span class="login-icon">
												<FontAwesomeIcon icon={faUnlock} className="text-gray-500" />
											</span>
											<input
												id="SignInPasswordAgain"
												name="password"
												type="password"
												className="login-input"
												placeholder="আপনার পাসওয়ার্ড পুনরায় প্রদান করুন"
											/>
										</div>
									</div>

									<div className="mt-8">
										<button className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900">
											নিবন্ধন করুন
										</button>
									</div>

									<div className="flex items-center justify-between mt-4">
										<span className="w-1/5 border-b  md:w-1/4" />

										<span
											className="text-base text-brand-900 font-semibold font-body uppercase cursor-pointer hover:text-deep-purple-accent-700"
											onClick={() => props.setNewUser(false)}
										>
											অথবা লগ ইন
										</span>
										<span className="w-1/5 border-b md:w-1/4" />
									</div>
								</Slide>
							</>
						)}
					</div>
				</div>
			</div>
			{/* Background Modal Opacity */}
			<div className="opacity-25 fixed inset-0 z-40 bg-brand-900" />
		</div>
	);
};

export default LoginModal;
