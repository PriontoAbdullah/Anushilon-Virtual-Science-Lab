import { motion } from "framer-motion";
import React from "react";
import Flip from "react-reveal/Flip";
import { Link } from "react-scroll";
import styled from "styled-components";
import WordsFading from "../MicroComponent/WordsFading";

// For styling words fading
const Wrapper = styled.div`
  width: 199px;
  display: inline-block;
  text-align: center;
  line-height: 73px;
  transition: 0.2s ease-out;
  & span {
    text-align: center;
    width: 100%;
  }
  @media (max-width: 1023px) {
    width: 125px;
    font-size: 30px;
    line-height: 47px;
  }
`;

const Hero = () => {
  return (
    <section className="px-5 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="max-w-xl sm:mx-auto lg:max-w-7xl">
          <div className="flex flex-col text-center">
            {/* Main Content */}
            <div className="max-w-xl my-14 md:mx-auto lg:max-w-4xl md:my-28">
              <h2 className="max-w-2xl mb-10 lg:mb-20 font-display text-3xl font-medium leading-10 lg:leading-normal tracking-wider text-gray-50 lg:text-5xl mx-auto">
                বাংলাদেশের{" "}
                <span className="relative">
                  <Wrapper>
                    <WordsFading />
                  </Wrapper>{" "}
                </span>
                <br /> ভার্চুয়াল সাইন্স ল্যাবে স্বাগতম
                <span className="font-normal">!</span>
              </h2>
              <p className="font-body text-lg md:leading-10 text-indigo-50 md:text-2xl">
                নবম থেকে দ্বাদশ শ্রেণির পদার্থবিজ্ঞান, রসায়ন ও জীববিজ্ঞান বিষয়ের
                সকল ল্যাব এক্সপেরিমেন্ট এবং বিজ্ঞান চর্চার সকল সিমুলেশন এখন
                সবসময়, সম্পূর্ণ বিনামূল্যে
                <span className="font-light ml-1">!</span>
              </p>
            </div>
            <div>
              {/* Button */}
              <Flip top>
                <Link to="features" smooth={true} className="deep-button">
                  আমাদের যা আছে
                </Link>
              </Flip>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
