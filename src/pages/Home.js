import React, { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import bgBanner from "../assets/images/background/header-bg.png";
import About from "../components/HomePage/Content/About";
import Partner from "../components/HomePage/Content/Partner";
import Features from "../components/HomePage/Features/Features";
import MobileResponsive from "../components/HomePage/Features/MobileResponsive";
import Footer from "../components/HomePage/Footer/Footer";
import Hero from "../components/HomePage/Header/Hero";
import Nav from "../components/HomePage/Header/Nav";
import Simulation from "../components/HomePage/Simulation/Simulation";
import Testimonial from "../components/HomePage/Testimonial/Testimonial";

const Home = () => {
  document.title = "অনুশীলন - ভার্চুয়াল সাইন্স ল্যাব";

  return (
    <Fragment>
      {/* For Toast Notification */}
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            minWidth: "450px",
            fontFamily: "Hind Siliguri",
          },
        }}
      />
      {/* For Background Image */}
      <div
        className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bgBanner})`,
        }}
      >
        <Nav />
        <Hero />
      </div>
      <About />
      <Features />
      <Simulation />
      <MobileResponsive />
      <Partner />
      <Testimonial />
      <Footer />
    </Fragment>
  );
};

export default Home;
