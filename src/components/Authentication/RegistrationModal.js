import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faMobileAlt,
  faUniversity,
  faUnlock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Fragment, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Slide from 'react-reveal/Slide';
import { ModalContext } from '../../App';
import signInLoader from '../../assets/images/loader/signIn.gif';
import { db } from '../../configs/firebase';
import defaultLabroom from '../../data/defaultLabroom';

const RegistrationModal = (props) => {
  // modal context
  const modalData = useContext(ModalContext);
  const [typePass, setTypePass] = useState(false);
  // form data initial states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    textChange: 'নিবন্ধন করুন',
  });

  const [formUserData, setFormUserData] = useState({
    uInstitution: props.institutionName,
    uName: '',
    uEmail: '',
    uMobile: '',
    uPassword1: '',
    uPassword2: '',
    uTextChange: 'নিবন্ধন করুন',
  });
  const [role, setRole] = useState('student');

  // for handling modal functionality
  const handleCloseModal = () => {
    modalData.setShowHeader('block');
    modalData.setShowRegistrationModal(false);
    modalData.setShowLoginModal(false);
  };

  const handleOpenLoginModal = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowRegistrationModal(false);
    modalData.setNewUser(false);
    modalData.setShowLoginModal(true);
  };

  const handleActivationMessage = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowRegistrationModal(false);
    modalData.setShowLoginModal(false);
    modalData.setShowActivationUserModal(true);
  };

  // get data from form and set into form data states
  const { name, email, password1, password2, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const {
    uInstitution,
    uName,
    uEmail,
    uMobile,
    uPassword1,
    uPassword2,
    uTextChange,
  } = formUserData;
  const handleUserChange = (text) => (e) => {
    setFormUserData({ ...formUserData, [text]: e.target.value });
  };

  const handleCountryCode = () => {
    toast(
      'মোবাইল নম্বর অবশ্যই বৈধ বাংলাদেশী মোবাইল নম্বর হতে হবে। (+880) কান্ট্রি কোড ব্যবহার করুন।',
      {
        icon: '🙏',
      }
    );
  };

  const handleStrongPassword = () => {
    toast(
      'পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে!',
      {
        icon: '🙏',
      }
    );
  };

  // post individual user form data to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        const loading = toast.loading('অনুগ্রহপূর্বক অপেক্ষা করুন...⏳');
        setFormData({ ...formData, textChange: 'নিবন্ধন হচ্ছে' });

        try {
          const querySnapshot = await db
            .collection('users')
            .where('email', '==', email)
            .get();
          if (querySnapshot.docs.length === 0) {
            // create a new user
            await db.collection('users').add({
              email: email,
              name: name,
              institution: '',
              mobile: '',
              avatar: 'https://i.ibb.co/1Ks65g5/avatar.png',
              address: '',
              description: '',
              enrolledClassrooms: defaultLabroom,
            });
          }
        } catch (err) {
          toast.dismiss();
          toast.error(err?.message);
        }

        // send data to server
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            password: password1,
            role,
          })
          .then((res) => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password1: '',
              password2: '',
              textChange: 'নিবন্ধন হয়েছে',
            });
            toast.dismiss(loading);
            toast.success(res.data.message);
            handleCloseModal();
          })
          .catch((err) => {
            setFormData({
              ...formData,
              name: name,
              email: email,
              password1: password1,
              password2: password2,
              textChange: 'নিবন্ধন করুন',
            });
            toast.dismiss(loading);
            toast.error(err?.response?.data?.errors);
          });
      } else {
        toast.error('পাসওয়ার্ড দুটির মধ্যে মিল খুঁজে পাওয়া যায়নি! 🤨');
      }
    } else {
      toast.error('অনুগ্রহপূর্বক সবগুলো স্থান তথ্য দিয়ে পূরণ করুন! 😒');
    }
  };

  // post institution user form data to the server
  const handleUserSubmit = async (e) => {
    e.preventDefault();

    if (uInstitution && uName && uEmail && uMobile && uPassword1) {
      if (uPassword1 === uPassword2) {
        const loading = toast.loading('অনুগ্রহপূর্বক অপেক্ষা করুন...⏳');
        setFormUserData({ ...formUserData, uTextChange: 'নিবন্ধন হচ্ছে' });

        try {
          const querySnapshot = await db
            .collection('users')
            .where('email', '==', uEmail)
            .get();
          if (querySnapshot.docs.length === 0) {
            // create a new user
            await db.collection('users').add({
              email: uEmail,
              name: uName,
              institution: uInstitution,
              mobile: uMobile,
              avatar: 'https://i.ibb.co/1Ks65g5/avatar.png',
              address: '',
              description: '',
              enrolledClassrooms: defaultLabroom,
            });
          }
        } catch (err) {
          toast.dismiss();
          toast.error(err?.message);
        }

        // send data to server
        axios
          .post(`${process.env.REACT_APP_API_URL}/registration`, {
            institution: uInstitution,
            name: uName,
            email: uEmail,
            mobile: uMobile,
            password: uPassword1,
            role,
          })
          .then((res) => {
            setFormUserData({
              ...formUserData,
              uName: '',
              uEmail: '',
              uMobile: '',
              uPassword1: '',
              uPassword2: '',
              uTextChange: 'নিবন্ধন হয়েছে',
            });
            toast.dismiss(loading);
            toast.success(res.data.message);
            handleActivationMessage();
          })
          .catch((err) => {
            setFormUserData({
              ...formUserData,
              uName: uName,
              uEmail: uEmail,
              uMobile: uMobile,
              uPassword1: uPassword1,
              uPassword2: uPassword2,
              uTextChange: 'নিবন্ধন করুন',
            });
            toast.dismiss(loading);
            toast.error(err?.response?.data?.errors);
          });
      } else {
        toast.error('পাসওয়ার্ড দুটির মধ্যে মিল খুঁজে পাওয়া যায়নি! 🤨');
      }
    } else {
      toast.error('অনুগ্রহপূর্বক সবগুলো স্থান তথ্য দিয়ে পূরণ করুন! 😒');
    }
  };

  return (
    <Fragment>
      <div>
        <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
          <div className="relative w-full mt-16 mb-4 lg:mt-4 2xl:mt-6 flex max-w-sm md:max-w-lg lg:max-w-4xl 2xl:max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
            {/* Left Side Animations */}
            <div className="hidden lg:block lg:w-1/2 bg-brand-900">
              {!props?.institutionUser ? (
                <img
                  src="https://cdn.dribbble.com/users/535360/screenshots/2583480/scientists_2.gif"
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
                className="close-button absolute top-0 right-0 m-7"
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

              {props?.institutionUser ? (
                // Registration For Institution
                <Fragment>
                  <form onSubmit={handleUserSubmit}>
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
                            onClick={() => setRole('student')}
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
                            onClick={() => setRole('teacher')}
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
                            defaultValue={uInstitution}
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
                            onChange={handleUserChange('uName')}
                            value={uName}
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
                            onChange={handleUserChange('uEmail')}
                            value={uEmail}
                          />
                        </div>
                      </div>

                      <div className="mt-4 font-body">
                        <div className="flex justify-between">
                          <label
                            className="block mb-2 text-base font-medium text-gray-700"
                            htmlFor="SignInMobilePhone"
                          >
                            যোগাযোগের নম্বর
                          </label>
                          <span
                            className="text-sm text-gray-700 cursor-pointer hover:text-deep-purple-accent-700 tracking-wide"
                            onClick={handleCountryCode}
                          >
                            কান্ট্রি কোড ব্যবহার করুন
                          </span>
                        </div>
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
                            onChange={handleUserChange('uMobile')}
                            value={uMobile}
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
                          <span
                            className="text-sm text-gray-700 cursor-pointer hover:text-deep-purple-accent-700 tracking-wide"
                            onClick={handleStrongPassword}
                          >
                            শক্তিশালী পাসওয়ার্ড ব্যবহার করুন
                          </span>
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
                            type={typePass ? 'text' : 'password'}
                            className="login-input"
                            placeholder="আপনার পাসওয়ার্ড প্রদান করুন"
                            onChange={handleUserChange('uPassword1')}
                            value={uPassword1}
                          />
                          <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-base leading-5 cursor-pointer">
                            <FontAwesomeIcon
                              icon={typePass ? faEyeSlash : faEye}
                              className="text-gray-500"
                              onClick={() => setTypePass(!typePass)}
                            />
                          </span>
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
                            type={typePass ? 'text' : 'password'}
                            className="login-input"
                            placeholder="আপনার পাসওয়ার্ড পুনরায় প্রদান করুন"
                            onChange={handleUserChange('uPassword2')}
                            value={uPassword2}
                          />
                          <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-base leading-5 cursor-pointer">
                            <FontAwesomeIcon
                              icon={typePass ? faEyeSlash : faEye}
                              className="text-gray-500"
                              onClick={() => setTypePass(!typePass)}
                            />
                          </span>
                        </div>
                      </div>

                      <div className="mt-8">
                        <button
                          className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                          type="submit"
                        >
                          {uTextChange}
                        </button>
                      </div>
                    </Slide>
                  </form>

                  {/* Login Button */}
                  <Slide bottom>
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
                  <form onSubmit={handleSubmit}>
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
                            onClick={() => setRole('student')}
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
                            onClick={() => setRole('teacher')}
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
                            onChange={handleChange('name')}
                            value={name}
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
                            onChange={handleChange('email')}
                            value={email}
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
                          <span
                            className="text-sm text-gray-700 cursor-pointer hover:text-deep-purple-accent-700 tracking-wide"
                            onClick={handleStrongPassword}
                          >
                            শক্তিশালী পাসওয়ার্ড ব্যবহার করুন
                          </span>
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
                            type={typePass ? 'text' : 'password'}
                            className="login-input"
                            placeholder="আপনার পাসওয়ার্ড প্রদান করুন"
                            onChange={handleChange('password1')}
                            value={password1}
                          />
                          <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-base leading-5 cursor-pointer">
                            <FontAwesomeIcon
                              icon={typePass ? faEyeSlash : faEye}
                              className="text-gray-500"
                              onClick={() => setTypePass(!typePass)}
                            />
                          </span>
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
                            type={typePass ? 'text' : 'password'}
                            className="login-input"
                            placeholder="আপনার পাসওয়ার্ড পুনরায় প্রদান করুন"
                            onChange={handleChange('password2')}
                            value={password2}
                          />
                          <span class="absolute inset-y-0 right-0 pr-3 flex items-center text-base leading-5 cursor-pointer">
                            <FontAwesomeIcon
                              icon={typePass ? faEyeSlash : faEye}
                              className="text-gray-500"
                              onClick={() => setTypePass(!typePass)}
                            />
                          </span>
                        </div>
                      </div>

                      <div className="mt-8">
                        <button
                          className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                          type="submit"
                        >
                          {textChange}
                        </button>
                      </div>
                    </Slide>
                  </form>

                  {/* Login Button */}
                  <Slide bottom>
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
