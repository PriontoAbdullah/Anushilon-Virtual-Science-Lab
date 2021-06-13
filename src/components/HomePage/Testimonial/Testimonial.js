import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import bgBannerTestimonial from '../../../assets/images/background/header-white-bg.png';
import AllReviews from '../../../data/testimonials';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import SectionTitle from '../MicroComponent/SectionTitle';
import Review from './Review';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual ]);

const Testimonial = () => {
	const [ reviews, SetReviews ] = useState([]);
	const { width } = useWindowDimensions();

	// Get all reviews
	useEffect(
		() => {
			SetReviews(AllReviews);
		},
		[ reviews ]
	);

	return (
		<section
			className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
			id="testimonial"
			data-aos="fade-up"
			style={{
				backgroundImage: `url(${bgBannerTestimonial})`
			}}
		>
			<div className="px-4 py-4 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-12 lg:pb-8">
				<Fade top>
					<SectionTitle
						title="ব্যবহারকারীরা যা বলছে আমাদের সম্পর্কে"
						description="এই ভার্চুয়াল ল্যাব শিক্ষক এবং তাদের শিক্ষার্থীদের জন্য যোগাযোগ এবং সহযোগিতার সরঞ্জামাদি সরবরাহ করে বিজ্ঞান শিক্ষার প্রক্রিয়াটিকে আরও সহজলভ্য করে ই-লার্নিং সিস্টেমের মতো। ভার্চুয়াল সায়েন্স ল্যাব শিখার পরিবেশ উন্নত করতে এবং আরও স্পষ্টভাবে শিক্ষার্থীদের কাছে বিজ্ঞানের তথ্য সরবরাহ করতে পারে।"
						space="mb-2"
					/>
				</Fade>
				{/* Review Component */}
				<Slide bottom>
					<div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-5">
						<Swiper
							spaceBetween={0}
							slidesPerView={width > 1280 ? 3 : width > 960 ? 2 : 1}
							centeredslide="true"
							navigation
							pagination={{ clickable: true }}
							autoplay={true}
							key={reviews.length}
						>
							{reviews &&
								reviews.map((reviews, index) => (
									<SwiperSlide key={index}>
										<Review reviews={reviews} />
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</Slide>
			</div>
		</section>
	);
};

export default Testimonial;
