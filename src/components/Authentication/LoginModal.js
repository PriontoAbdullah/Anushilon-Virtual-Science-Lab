import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Slide from 'react-reveal/Slide';
import { useHistory, useLocation } from 'react-router-dom';
import { ModalContext } from '../../App';
import signInLoader from '../../assets/images/loader/signIn.gif';
import Institution from '../../data/Institution';
import { authenticate, isAuth } from '../../helpers/auth';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import RegistrationModal from './RegistrationModal';

const LoginModal = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { from } = location.state || { from: { pathname: '/' } };
  const modalData = useContext(ModalContext);
  // initial states
  const [institutionUser, setInstitutionUser] = useState(null);
  const [institutionName, setInstitutionName] = useState(null);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [institutionList, setInstitutionList] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [typePass, setTypePass] = useState(false);

  // show notification
  useEffect(() => {
    modalData.newUser &&
      toast(
        `অনুগ্রহক করে এই মুহূর্তে "স্বতন্ত্র ভাবে নিবন্ধন করে" পুরো এপ্লিকেশনটি ব্যবহার করতে পারবেন! 😊`,
        {
          icon: '🙏',
          position: 'bottom-left',
        }
      );
  }, [modalData.newUser]);

  // search institution name
  useEffect(() => {
    searchValue === ''
      ? setInstitutionList(Institution)
      : setInstitutionList(
          Institution.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
  }, [searchValue]);

  // all modal handlers
  const handleCloseLoginModal = () => {
    modalData.setShowHeader('block');
    modalData.setShowLoginModal(false);
  };

  const handleSearchBox = () => {
    setShowSearchBox(true);
  };

  const institutionFilterChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOpenRegistrationModal = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowRegistrationModal(true);
  };

  const handleSetInstitution = (value) => {
    setInstitutionUser(true);
    setInstitutionName(value);
    handleOpenRegistrationModal();
  };

  const handleRegistrationModal = () => {
    setInstitutionUser(false);
    handleOpenRegistrationModal();
  };

  // login form data states
  const [formData, setFormData] = useState({
    email: '',
    password1: '',
    textChange: 'লগ ইন করুন',
  });
  const { email, password1, textChange } = formData;
  // login from data handler
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  // redirect for role based user
  const informParent = (response) => {
    authenticate(response, () => {
      // dispatch to auth reducer
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          token: response.data.token,
          user: response.data.user,
        },
      });

      isAuth() && isAuth().role === 'admin'
        ? history.push('/admin')
        : history.push('/');
      toast.success(
        `হ্যালো! ${response.data.user.name}, ফিরে আসার জন্য ধন্যবাদ! ❤️`
      );
    });
  };

  // google login handler
  const sendGoogleToken = (tokenId) => {
    const loading = toast.loading('অনুগ্রহপূর্বক অপেক্ষা করুন...⏳');
    axios
      .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
        idToken: tokenId,
      })
      .then((res) => {
        toast.dismiss(loading);
        informParent(res);
        handleCloseLoginModal();
      })
      .catch((error) => {
        // console.log("GOOGLE SIGNIN ERROR", error.response);
        toast.dismiss(loading);
        toast.error(error.response.data.error);
      });
  };

  // facebook login handler
  const sendFacebookToken = (userID, accessToken) => {
    const loading = toast.loading('অনুগ্রহপূর্বক অপেক্ষা করুন...');
    axios
      .post(`${process.env.REACT_APP_API_URL}/facebooklogin`, {
        userID,
        accessToken,
      })
      .then((res) => {
        toast.dismiss(loading);
        // console.log(res.data);
        informParent(res);
        handleCloseLoginModal();
      })
      .catch((error) => {
        toast.dismiss(loading);
        // console.log("GOOGLE SIGNIN ERROR", error.response);
        toast.error(error.response.data.error);
      });
  };

  // responses from google & facebook api
  const responseGoogle = (response) => {
    // console.log(response);
    sendGoogleToken(response.tokenId);
  };

  const responseFacebook = (response) => {
    // console.log(response);
    sendFacebookToken(response.userID, response.accessToken);
  };

  // manual login handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password1) {
      const loading = toast.loading('অনুগ্রহপূর্বক অপেক্ষা করুন...⏳');
      setFormData({ ...formData, textChange: 'লগ ইন হচ্ছে' });
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password: password1,
        })
        .then((res) => {
          authenticate(res, () => {
            setFormData({
              ...formData,
              email: '',
              password1: '',
              textChange: 'লগ ইন হয়েছে',
            });

            // dispatch to auth reducer
            dispatch({
              type: GLOBALTYPES.AUTH,
              payload: {
                token: res.data.token,
                user: res.data.user,
              },
            });

            toast.dismiss(loading);
            // close login modal
            handleCloseLoginModal();
            // redirect for role based user
            isAuth() && isAuth().role === 'admin'
              ? history.push('/admin')
              : history.replace(from);
            toast.success(
              `হ্যালো! ${res.data.user.name}, ফিরে আসার জন্য ধন্যবাদ! ❤️`
            );
          });
        })
        .catch((err) => {
          setFormData({
            ...formData,
            email,
            password1: '',
            textChange: 'লগ ইন করুন',
          });
          toast.dismiss(loading);
          toast.error(err.message);
        });
    } else {
      toast.error('অনুগ্রহপূর্বক সবগুলো স্থান তথ্য দিয়ে পূরণ করুন! 😒');
    }
  };

  // forget password form data states
  const [forgetPasswordData, setForgetPasswordData] = useState({
    forgetEmail: '',
    forgetTextChange: 'জমা দিন',
  });
  const { forgetEmail, forgetTextChange } = forgetPasswordData;
  // forget password data
  const handleForgetChange = (text) => (e) => {
    setForgetPasswordData({ ...forgetPasswordData, [text]: e.target.value });
  };

  // forget password handler
  const handleForgetPasswordSubmit = (e) => {
    e.preventDefault();

    const loading = toast.loading('অনুগ্রহপূর্বক অপেক্ষা করুন...⏳');
    if (forgetEmail) {
      setForgetPasswordData({
        ...forgetPasswordData,
        forgetTextChange: 'জমা দেওয়া হচ্ছে',
      });

      axios
        .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
          forgetEmail,
        })
        .then((res) => {
          setForgetPasswordData({
            ...forgetPasswordData,
            forgetEmail: '',
            textChange: 'জমা দেওয়া হয়েছে',
          });
          // close login modal
          setForgetPassword(false);
          handleCloseLoginModal();
          toast.dismiss(loading);
          toast.success(res.data.message);
        })
        .catch((err) => {
          setForgetPasswordData({
            ...forgetPasswordData,
            forgetEmail: '',
            forgetTextChange: 'জমা দিন',
          });
          toast.dismiss(loading);
          toast.error(err.message);
        });
    } else {
      toast.error('অনুগ্রহপূর্বক তথ্য দিয়ে পূরণ করুন! 😒');
    }
  };

  return (
    <Fragment>
      {!modalData.showRegistrationModal && (
        <div>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
            <div
              className={`relative w-full mt-12 mb-24 sm:mb-4 ${
                !modalData.newUser
                  ? !forgetPassword
                    ? 'lg:mt-8 2xl:mt-10'
                    : 'lg:mt-18 2xl:mt-20'
                  : 'lg:mt-4 2xl:mt-6'
              } flex max-w-sm md:max-w-lg lg:max-w-4xl 2xl:max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl`}
            >
              {/* Left Side Animations */}
              <div className="hidden lg:block lg:w-1/2 bg-brand-900">
                {!modalData.newUser ? (
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
                  onClick={handleCloseLoginModal}
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

                {!modalData.newUser ? (
                  // Login Form
                  <Fragment>
                    {/* LogIn Header */}
                    <div>
                      <h2 className="text-2xl ml-4 mb-2 font-display text-center font-bold text-brand-900">
                        অনুশীলন
                      </h2>
                      <p className="text-lg font-body text-center text-gray-600 ">
                        ফিরে আসার জন্য স্বাগতম!
                      </p>
                    </div>

                    {!forgetPassword ? (
                      <Fragment>
                        {/* Sign In with Google */}
                        <Slide bottom>
                          <GoogleLogin
                            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            render={(renderProps) => (
                              <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="w-full flex items-center justify-center mt-3 mb-5 text-brand-900 rounded-lg shadow-md outline-none hover:bg-deep-purple-50 hover:text-deep-purple-500 cursor-pointer transition-all duration-300 ease-in-out focus:outline-none"
                              >
                                <div className="px-4 py-3">
                                  <img
                                    src="https://img.icons8.com/fluent/28/000000/google-logo.png"
                                    alt="google-logo"
                                  />
                                </div>
                                {/* Google SignIn Button */}
                                <span className="w-5/6 px-4 py-3 pr-20 font-semibold font-body text-base text-center">
                                  গুগল দিয়ে সাইন ইন করুন
                                </span>
                              </button>
                            )}
                          ></GoogleLogin>
                        </Slide>

                        {/* SignIn with Facebook */}
                        <Slide bottom>
                          <FacebookLogin
                            appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
                            autoLoad={false}
                            callback={responseFacebook}
                            render={(renderProps) => (
                              <button
                                onClick={renderProps.onClick}
                                className="w-full flex items-center justify-center mt-3 mb-5 text-brand-900 rounded-lg shadow-md outline-none hover:bg-deep-purple-50 hover:text-deep-purple-500 cursor-pointer transition-all duration-300 ease-in-out focus:outline-none"
                              >
                                <div className="px-4 py-3">
                                  <img
                                    src="https://img.icons8.com/fluent/29/000000/facebook-new.png"
                                    alt="facebook-logo"
                                  />
                                </div>
                                {/* Google SignIn Button */}
                                <span className="w-5/6 px-4 py-3 pr-20 font-semibold font-body text-base text-center">
                                  ফেসবুক দিয়ে সাইন ইন করুন
                                </span>
                              </button>
                            )}
                          />
                        </Slide>

                        {/* Common Login */}
                        <form onSubmit={handleSubmit}>
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
                                  <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-gray-500"
                                  />
                                </span>
                                <input
                                  id="LoggingEmailAddress"
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
                                  onClick={() => setForgetPassword(true)}
                                >
                                  পাসওয়ার্ড ভুলে গেছেন?
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
                                  id="loggingPassword"
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
                            <div className="mt-8">
                              {/* Manual Login Button */}
                              <button
                                className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                                type="submit"
                              >
                                {textChange}
                              </button>
                            </div>
                          </Slide>
                        </form>

                        <Slide bottom>
                          <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b  md:w-1/4" />
                            <span
                              className="text-base text-brand-900 font-semibold font-body uppercase cursor-pointer hover:text-deep-purple-accent-700"
                              onClick={() => modalData.setNewUser(true)}
                            >
                              অথবা রেজিস্ট্রেশন করুন
                            </span>
                            <span className="w-1/5 border-b md:w-1/4" />
                          </div>
                        </Slide>
                      </Fragment>
                    ) : (
                      // Forget Password Form
                      <Fragment>
                        <form onSubmit={handleForgetPasswordSubmit}>
                          <Slide bottom>
                            <div className="flex items-center justify-between mt-4">
                              <span className="w-1/5 border-b lg:w-1/4" />
                              <span className="mt-1 text-lg text-center text-gray-700 font-normal font-body tracking-wider uppercase">
                                পাসওয়ার্ড ভুলে গেছেন?
                              </span>
                              <span className="w-1/5 border-b lg:w-1/4" />
                            </div>

                            <div className="mt-3 font-body">
                              <label
                                className="block mb-2 text-base font-medium text-gray-700"
                                htmlFor="ForgetEmailAddress"
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
                                  id="ForgetEmailAddress"
                                  name="email"
                                  type="email"
                                  className="login-input"
                                  placeholder="আপনার ইমেইল প্রদান করুন"
                                  onChange={handleForgetChange('forgetEmail')}
                                  value={forgetEmail}
                                />
                              </div>
                            </div>
                            {/* Forget Password Send Button */}
                            <div className="mt-8">
                              <button className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900">
                                {forgetTextChange}
                              </button>
                            </div>
                          </Slide>
                        </form>

                        <Slide bottom>
                          <div className="flex items-center justify-between mt-4">
                            <span className="w-1/5 border-b  md:w-1/4" />
                            <span
                              className="text-base text-brand-900 font-semibold font-body uppercase cursor-pointer hover:text-deep-purple-accent-700"
                              onClick={() => setForgetPassword(false)}
                            >
                              অথবা লগ ইন করুন
                            </span>
                            <span className="w-1/5 border-b md:w-1/4" />
                          </div>
                        </Slide>
                      </Fragment>
                    )}
                  </Fragment>
                ) : (
                  // Registration Form
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
                          <span className="text-lg text-brand-900 font-body mr-3 font-medium">
                            নিবন্ধন করুন আপনার শিক্ষাপ্রতিষ্ঠানের মাধ্যমে
                          </span>
                        </label>
                      </div>

                      <div className="mt-5 font-body">
                        <label
                          className="block mb-2 text-base font-medium text-gray-700"
                          htmlFor="SearchInstitutionName"
                        >
                          আপনার শিক্ষা প্রতিষ্ঠানের নাম
                        </label>
                        <div className="relative flex w-full flex-wrap items-stretch mb-3">
                          <span className="login-icon">
                            <FontAwesomeIcon
                              icon={faUniversity}
                              className="text-gray-500"
                            />
                          </span>
                          <input
                            id="SearchInstitutionName"
                            type="text"
                            className="login-input"
                            onChange={institutionFilterChange}
                            onFocus={handleSearchBox}
                            placeholder="আপনার শিক্ষা প্রতিষ্ঠানের নাম প্রদান করুন"
                          />
                        </div>
                      </div>
                    </Slide>
                    {/* Show Search Box */}
                    {showSearchBox ? (
                      <div className="inline-flex flex-col justify-center relative text-gray-600 font-body w-full">
                        <h3 className="mt-2 text-sm">সার্চ রেজাল্ট:</h3>
                        <ul className="bg-white border border-gray-100  overflow-y-scroll h-48 mt-2 ">
                          {/* If not found any Institution */}
                          {institutionList.length === 0 && (
                            <li className="pl-2 pr-2 py-2 border-b-2 border-gray-100 relative hover:bg-indigo-50 hover:text-gray-900">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                                />
                              </svg>
                              আপনার শিক্ষা প্রতিষ্ঠানের নাম খুঁজে পাওয়া যাচ্ছে
                              না!
                            </li>
                          )}

                          {/* If Institution Found */}
                          {institutionList &&
                            institutionList.map((item, index) => (
                              <li
                                className="pl-2 pr-2 py-2 border-b-2 border-gray-100 relative cursor-pointer hover:bg-indigo-50 hover:text-gray-900"
                                key={index}
                                onClick={() => handleSetInstitution(item.name)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 inline mr-2 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                  />
                                </svg>
                                {item.name}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : (
                      // Hide Search Box
                      <div className="inline-flex flex-col justify-center relative text-gray-600 font-body bg-gray-100 rounded-lg px-3 py-4 mt-3">
                        <Slide bottom cascade>
                          <div>
                            <p className="pl-2 pr-2 py-2 border-b-2 border-gray-100 relative ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                              </svg>
                              আপনার শিক্ষা প্রতিষ্ঠানের নাম সার্চ করে নিবন্ধন
                              করুন, এতে আপনার শিক্ষাপ্রতিষ্ঠান আপনার সকল
                              পারফরমেন্স দেখতে পারবে এবং আপনি আপনার প্রতিষ্ঠান
                              থেকে সকল সুযোগ সুবিধা ভোগ করতে পারবেন।
                            </p>
                          </div>
                          <div>
                            <p className="pl-2 pr-2 py-2.5 border-gray-100 relative ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                              এছাড়াও আপনি চাইলে শিক্ষা প্রতিষ্ঠান ছাড়া স্বতন্ত্র
                              ভাবে নিবন্ধন করে সকল সুযোগ সুবিধা ভোগ করতে পারবেন।
                            </p>
                          </div>
                        </Slide>
                      </div>
                    )}

                    <Slide bottom>
                      {/* Registration for Individual  */}
                      <div className="flex items-center justify-between mt-6">
                        <span className="w-1/6 border-b " />
                        <span className="text-base lg:textlg text-gray-700 font-body mx-3 font-medium">
                          অথবা নিবন্ধন করুন স্বতন্ত্র ভাবে
                        </span>
                        <span className="w-1/6 border-b " />
                      </div>

                      <div className="mt-5">
                        <button
                          className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                          onClick={handleRegistrationModal}
                        >
                          স্বতন্ত্র ভাবে নিবন্ধন করুন
                        </button>
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
      )}

      {/* Login Modal Component */}
      {modalData.showRegistrationModal ? (
        <RegistrationModal
          institutionUser={institutionUser}
          institutionName={institutionName}
        />
      ) : null}
    </Fragment>
  );
};

export default LoginModal;
