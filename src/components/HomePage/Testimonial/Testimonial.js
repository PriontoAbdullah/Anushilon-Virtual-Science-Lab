import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import bgBannerTestimonial from '../../../assets/images/background/header-white-bg.png';
import AllReviews from '../../../data/testimonials';
import SectionTitle from '../MicroComponent/SectionTitle';
import Review from './Review';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual ]);

// For getting window size & set slider number to show

function getWindowDimensions() {
	const { innerWidth: width } = window;
	return {
		width
	};
}

function useWindowDimensions() {
	const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

const Testimonial = () => {
	const [ reviews, SetReviews ] = useState([]);
	const [ sliderNumber, SetSliderNumber ] = useState(3);
	const { width } = useWindowDimensions();

	useEffect(
		() => {
			SetReviews(AllReviews);
		},
		[ reviews ]
	);

	useEffect(
		() => {
			if (width > 1280) {
				SetSliderNumber(3);
			} else if (width > 960) {
				SetSliderNumber(2);
			} else {
				SetSliderNumber(1);
			}
		},
		[ width ]
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
			<div className="px-4 py-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16 lg:pb-8">
				<Fade top>
					<SectionTitle
						title="ব্যবহারকারীরা যা বলছে আমাদের সম্পর্কে"
						description="এই ভার্চুয়াল ল্যাব শিক্ষক এবং তাদের শিক্ষার্থীদের জন্য যোগাযোগ এবং সহযোগিতার সরঞ্জামাদি সরবরাহ করে বিজ্ঞান শিক্ষার প্রক্রিয়াটিকে আরও সহজলভ্য করে ই-লার্নিং সিস্টেমের মতো। ভার্চুয়াল সায়েন্স ল্যাব শিখার পরিবেশ উন্নত করতে এবং আরও স্পষ্টভাবে শিক্ষার্থীদের কাছে বিজ্ঞানের তথ্য সরবরাহ করতে পারে।"
						space="mb-2"
					/>
				</Fade>
				<Slide bottom>
				<div className="w-full flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-5">
					<Swiper
						spaceBetween={0}
						slidesPerView={sliderNumber}
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
