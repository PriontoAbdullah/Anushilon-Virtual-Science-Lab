import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import SwiperCore, { A11y, Autoplay, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import bgBannerPartner from "../../../assets/images/background/biography-bg.png";
import SectionTitle from "../MicroComponent/SectionTitle";

// install Swiper components
SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);

const partnerData = [
  {
    image: require("../../../assets/images/partner/partner1.png"),
  },
  {
    image: require("../../../assets/images/partner/partner2.png"),
  },
  {
    image: require("../../../assets/images/partner/partner3.png"),
  },
  {
    image: require("../../../assets/images/partner/partner4.png"),
  },
  {
    image: require("../../../assets/images/partner/partner5.png"),
  },
  {
    image: require("../../../assets/images/partner/partner6.png"),
  },
  {
    image: require("../../../assets/images/partner/partner7.png"),
  },
  {
    image: require("../../../assets/images/partner/partner8.png"),
  },
  {
    image: require("../../../assets/images/partner/partner9.png"),
  },
  {
    image: require("../../../assets/images/partner/partner10.png"),
  },
  {
    image: require("../../../assets/images/partner/partner11.png"),
  },
  {
    image: require("../../../assets/images/partner/partner12.png"),
  },
  {
    image: require("../../../assets/images/partner/partner13.png"),
  },
  {
    image: require("../../../assets/images/partner/partner14.png"),
  },
  {
    image: require("../../../assets/images/partner/partner15.png"),
  },
];

const Partner = () => {
  return (
    <section
      className="min-h-full bg-cover bg-no-repeat bg-center"
      id="features"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bgBannerPartner})`,
      }}
    >
      <div className="px-4 pt-16 pb-12 mx-auto max-w-7xl">
        <SectionTitle
          title="আমাদের প্লাটফর্মে নিবন্ধনকৃত শিক্ষা প্রতিষ্ঠান সমূহ"
          description="আপনার শিক্ষা প্রতিষ্ঠানটি যুক্ত করুন অনুশীলনের সাথে এবং উপভোগ করুন শিক্ষার্থীদের সিমুলেশানের অভিজ্ঞতা। আপনার প্রতিষ্ঠানের শিক্ষাথীদের মনিটরিং এবং শিক্ষদের এক্টিভিটি পর্যাবেক্ষন করতে এখনই রেজিস্ট্রেশন করুন।"
          space="mb-12"
        />
        <Fade bottom>
          <Swiper
            key={partnerData.length}
            tag="section"
            wrapperTag="ul"
            spaceBetween={0}
            centeredSlides={false}
            autoplay={{ delay: 1800 }}
            slidesPerView={"auto"}
            pagination={{ clickable: false }}
          >
            {/* Getting All Patterns Logo */}
            <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
              {partnerData &&
                partnerData.map((item, index) => (
                  <div className="flex items-center justify-center" key={index}>
                    <SwiperSlide
                      tag="li"
                      key={index}
                      style={{ width: "180px" }}
                    >
                      <img
                        src={item.image.default}
                        alt="Logo"
                        className="block object-contain h-32 mb-6"
                      />
                    </SwiperSlide>
                  </div>
                ))}
            </div>
          </Swiper>
        </Fade>
        <Fade bottom>
          {/* Institution Registration Button */}
          <div className="flex justify-center mt-8">
            <Link to="/registration" className="deep-button focus:ring-0">
              আপনার শিক্ষা প্রতিষ্ঠানটি নিবন্ধন করুন এখনই
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Partner;
