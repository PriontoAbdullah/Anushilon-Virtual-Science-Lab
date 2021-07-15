import {
  faEnvelope,
  faLock,
  faMobileAlt,
  faUniversity,
  faUnlock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useContext } from "react";
import Slide from "react-reveal/Slide";
import { ModalContext } from "../../App";
import loginLoader from "../../assets/images/loader/login.gif";
import signInLoader from "../../assets/images/loader/signIn.gif";

const RegistrationModal = (props) => {
  const modalData = useContext(ModalContext);

  const handleCloseModal = () => {
    modalData.setShowHeader("block");
    modalData.setShowRegistrationModal(false);
    modalData.setShowLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    modalData.setShowHeader("hidden");
    modalData.setShowRegistrationModal(false);
    props.setNewUser(false);
    modalData.setShowLoginModal(true);
  };

  return (
    <Fragment>
      <div>
        <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
          <div className="relative w-full mt-16 mb-4 lg:mt-4 2xl:mt-6 flex max-w-sm md:max-w-lg lg:max-w-4xl 2xl:max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
            {/* Left Side Animations */}
            <div className="hidden lg:block lg:w-1/2 bg-brand-900">
              {!props.institutionUser ? (
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
              <button
                className="close-button "
                type="button"
                onClick={handleCloseModal}
              >
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

              {props.institutionUser ? (
                // Registration For Institution
                <Fragment>
                  <Slide bottom>
                    <div>
                      {/* Registration Header*/}
                      <h2 className="text-2xl ml-4 mb-2 font-display text-center font-bold text-brand-900">
                        অনুশীলন
                      </h2>
                      <p className="text-lg font-body text-center text-gray-600 ">
                        নতুন ব্যবহারকারী হিসাবে নিবন্ধন করুন
                      </p>
                    </div>
                    <div className="mt-3 mb-0 font-body flex flex-wrap justify-center items-center">
                      <label className="inline-flex items-center">
                        <span className="text-base text-gray-700 font-body mr-3 font-medium">
                          আমি একজন
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
                        <span className=" text-gray-700 ml-2 font-body">
                          শিক্ষার্থী
                        </span>
                      </label>
                      <label className="inline-flex items-center ml-3 cursor-pointer">
                        <input
                          type="radio"
                          className="form-radio ring-brand-900"
                          name="accountType"
                          value="teacher"
                        />
                        <span className=" text-gray-700 ml-2 font-body">
                          শিক্ষক
                        </span>
                      </label>
                    </div>
                    {/* Registration Form*/}
                    <div className="mt-4 font-body">
                      <label
                        className="block mb-2 text-base font-medium text-gray-700"
                        htmlFor="SignInInstitutionName"
                      >
                        শিক্ষা প্রতিষ্ঠানের নাম
                      </label>
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faUniversity}
                            className="text-gray-500"
                          />
                        </span>
                        <input
                          id="SignInInstitutionName"
                          name="institutionName"
                          type="text"
                          className="login-input"
                          placeholder="আপনার শিক্ষা প্রতিষ্ঠানের নাম প্রদান করুন"
                          defaultValue={props.institutionName}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="mt-4 font-body">
                      <label
                        className="block mb-2 text-base font-medium text-gray-700"
                        htmlFor="SignInUserName"
                      >
                        নাম
                      </label>
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="text-gray-500"
                          />
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
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-gray-500"
                          />
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
                      <label
                        className="block mb-2 text-base font-medium text-gray-700"
                        htmlFor="SignInMobilePhone"
                      >
                        যোগাযোগের নম্বর
                      </label>
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faMobileAlt}
                            className="text-gray-500"
                          />
                        </span>
                        <input
                          id="SignInMobilePhone"
                          name="mobile"
                          type="text"
                          className="login-input"
                          placeholder="আপনার কন্টাক্ট নম্বর প্রদান করুন"
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
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="text-gray-500"
                          />
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
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faUnlock}
                            className="text-gray-500"
                          />
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
                        onClick={handleOpenLoginModal}
                      >
                        অথবা লগ ইন
                      </span>
                      <span className="w-1/5 border-b md:w-1/4" />
                    </div>
                  </Slide>
                </Fragment>
              ) : (
                // Registration For Individual
                <Fragment>
                  <Slide bottom>
                    <div>
                      {/* Registration Header*/}
                      <h2 className="text-2xl ml-4 mb-2 font-display text-center font-bold text-brand-900">
                        অনুশীলন
                      </h2>
                      <p className="text-lg font-body text-center text-gray-600 ">
                        নতুন ব্যবহারকারী হিসাবে নিবন্ধন করুন
                      </p>
                    </div>
                    <div className="mt-3 mb-0 font-body flex flex-wrap justify-center items-center">
                      <label className="inline-flex items-center">
                        <span className="text-base text-gray-700 font-body mr-3 font-medium">
                          আমি একজন
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
                        <span className=" text-gray-700 ml-2 font-body">
                          শিক্ষার্থী
                        </span>
                      </label>
                      <label className="inline-flex items-center ml-3 cursor-pointer">
                        <input
                          type="radio"
                          className="form-radio ring-brand-900"
                          name="accountType"
                          value="teacher"
                        />
                        <span className=" text-gray-700 ml-2 font-body">
                          শিক্ষক
                        </span>
                      </label>
                    </div>
                    {/* Registration Form*/}
                    <div className="mt-2 font-body">
                      <label
                        className="block mb-2 text-base font-medium text-gray-700"
                        htmlFor="SignInUserName"
                      >
                        নাম
                      </label>
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="text-gray-500"
                          />
                        </span>
                        <input
                          id="SignInUserName"
                          name="name"
                          type="text"
                          className="login-input"
                          placeholder="আপনার নাম প্রদান করুন"
                          defaultValue=""
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
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-gray-500"
                          />
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
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="text-gray-500"
                          />
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
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <span className="login-icon">
                          <FontAwesomeIcon
                            icon={faUnlock}
                            className="text-gray-500"
                          />
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
                        onClick={handleOpenLoginModal}
                      >
                        অথবা লগ ইন
                      </span>
                      <span className="w-1/5 border-b md:w-1/4" />
                    </div>
                  </Slide>
                </Fragment>
              )}
            </div>
          </div>
        </div>
        {/* Background Modal Opacity */}
        <div className="opacity-25 fixed inset-0 z-40 bg-brand-900" />
      </div>
    </Fragment>
  );
};

export default RegistrationModal;
