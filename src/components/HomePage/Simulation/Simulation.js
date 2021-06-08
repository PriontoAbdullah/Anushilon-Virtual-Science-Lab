import React from 'react';
import Slide from 'react-reveal/Slide';
import bgBannerSimulation from '../../../assets/images/background/features-3.png';
import studentGIF from '../../../assets/images/banner/student.gif';
import biology from '../../../assets/images/icon/biology.png';
import chemistry from '../../../assets/images/icon/chemistry.png';
import physics from '../../../assets/images/icon/physics.png';

const Simulation = () => {
	return (
		<section
			className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
			id="simulation"
			style={{
				backgroundImage: `url(${bgBannerSimulation})`
			}}
		>
			<div className="px-8 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16 lg:pb-10">
				<div className="grid sm:gap-8 row-gap-8 grid-cols-1 lg:grid-cols-12">
					<div className="col-span-5 mb-12 py-6 sm:mb-0">
						<Slide up>
							<img
								className="w-4/5 mx-auto sm:w-full sm:h-full rounded-xl shadow-sm"
								src={studentGIF}
								alt="Student-gif"
							/>
						</Slide>
					</div>
					<div className="col-span-7 flex flex-wrap justify-center my-5">
						<div className="max-w-3xl mb-5">
							<Slide up>
								<h2 className="mb-5 font-display text-2xl font-bold tracking-normal text-gray-900 leading-relaxed md:text-3xl md:leading-normal">
									ঘরে বসেই এক্সপেরিমেন্ট করো, সিমুলেশন এর মাধ্যমে
									<span className="inline-block text-brand-900 ml-0 sm:ml-3">
										হয়ে ওঠো ক্ষুদে বিজ্ঞানী 🚀
									</span>
								</h2>
							</Slide>
							<Slide up>
								<p className="max-w-2xl text-base text-gray-700 font-body md:text-lg">
									ইন্টারেক্টিভ সিমুলেশন শিক্ষার্থীদের জন্য নতুন এবং অনন্য ভাবে বিজ্ঞান অনলাইন শেখার
									সুযোগ তৈরি করে। এই পরিবেশটি মূলত তাত্ত্বিক ধারণাগুলি প্রদর্শনের জন্য পরীক্ষণ গুলিতে
									মনোনিবেশ করে এবং সত্যায়িত পরীক্ষামূলক যন্ত্রপাতি ছাড়াই চলতে পারে।
								</p>
							</Slide>
						</div>
						<div className="grid gap-5 row-gap-8 sm:grid-cols-3 font-body">
							<Slide bottom>
								<div className="bg-brand-accent-100 shadow-3xl m-3 cursor-pointer">
									<div className="h-full p-3 sm:p-5 mx-auto text-center hover:bg-indigo-50">
										<img
											className="object-cover w-36 h-36 mx-auto rounded sm:h-32 xl:h-40 sm:w-32 xl:w-40"
											src={physics}
											alt="Science-logo"
										/>
										<h6 className="mt-5 font-semibold leading-5 text-2xl text-brand-900">
											পদার্থ বিজ্ঞান
										</h6>
									</div>
								</div>
							</Slide>
							<Slide bottom>
								<div className="bg-brand-accent-100 shadow-3xl m-3 cursor-pointer">
									<div className="h-full p-3 sm:p-5 text-center hover:bg-indigo-50">
										<img
											className="object-cover w-36 h-36 mx-auto rounded sm:h-32 xl:h-40 sm:w-32 xl:w-40"
											src={chemistry}
											alt="Science-logo"
										/>
										<h6 className="mt-5 font-semibold leading-5 text-2xl text-brand-900">রসায়ন</h6>
									</div>
								</div>
							</Slide>
							<Slide bottom>
								<div className="bg-brand-accent-100 shadow-3xl m-3 cursor-pointer">
									<div className="h-full p-3 sm:p-5 text-center hover:bg-indigo-50">
										<img
											className="object-cover w-36 h-36 mx-auto rounded sm:h-32 xl:h-40 sm:w-32 xl:w-40"
											src={biology}
											alt="Science-logo"
										/>
										<h6 className="mt-5 font-semibold leading-5 text-2xl text-brand-900">
											জীব বিজ্ঞান
										</h6>
									</div>
								</div>
							</Slide>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Simulation;
