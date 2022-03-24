import { motion } from 'framer-motion';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { animateScroll as scroll, Link } from 'react-scroll';
import { ModalContext } from '../../../App';
import textLogo from '../../../assets/images/text-logo.png';
import { isAuth, signout } from '../../../helpers/auth';
import { GLOBALTYPES } from '../../../redux/actions/globalTypes';
import LoginModal from '../../Authentication/LoginModal';
import classes from './Navbar.module.css';

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // modal context value
  const modalData = useContext(ModalContext);
  const { auth } = useSelector((state) => state);

  // initial states
  const [isAuthenticated, setIsAuthenticated] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // For Scrolling Function
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // For re-rendering on auth change
  const handleAuthChange = () => {
    // dispatch to auth reducer
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: null,
        user: null,
      },
    });

    // remove token from local storage
    localStorage.removeItem('jwtToken');

    setIsAuthenticated(new Date());
    toast.success('সফল ভাবে সাইন আউট হয়েছে! আমাদের সাথে থাকার জন্য ধন্যবাদ ❤️');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let headerClasses = ['header'];
  if (scrolled) {
    headerClasses.push(classes.scrolled);
  }

  // For all modal controler - responsive
  const handleDesktopLogin = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowLoginModal(true);
    modalData.setNewUser(false);
  };

  const handleDesktopSignIn = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowLoginModal(true);
    modalData.setNewUser(true);
  };

  const handleMobileLogin = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowLoginModal(true);
    modalData.setNewUser(false);
    setIsMenuOpen(false);
  };

  const handleMobileSignIn = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowLoginModal(true);
    modalData.setNewUser(true);
    setIsMenuOpen(false);
  };

  return (
    <div>
      <motion.div
        className={`${headerClasses.join(' ')}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <header className={`top-0 w-full fixed ${modalData.showHeader}`}>
          <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between font-body">
              <div className="flex items-center">
                {/* Logo */}
                <Link
                  to="/"
                  className="inline-flex items-center mr-8"
                  onClick={() => scroll.scrollToTop()}
                >
                  <span
                    className={`${
                      scrolled ? 'nav-link-deep' : 'nav-link-light'
                    } text-3xl font-display font-black tracking-wider cursor-pointer`}
                  >
                    অনুশীলন
                  </span>
                  <span className="hidden">{isAuthenticated.toString()}</span>
                </Link>
                {/* Desktop Nav View */}
                <ul className="items-center hidden space-x-8 lg:flex">
                  <li>
                    <Link
                      to="simulation"
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      activeClass={`${classes.active}`}
                      className={`${
                        scrolled ? 'nav-link-deep' : 'nav-link-light'
                      } nav-link-general`}
                    >
                      আমাদের সিমুলেশন
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="features"
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      activeClass={`${classes.active}`}
                      className={`${
                        scrolled ? 'nav-link-deep' : 'nav-link-light'
                      } nav-link-general`}
                    >
                      আমাদের বৈশিষ্ট্য
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="testimonial"
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      activeClass={`${classes.active}`}
                      className={`${
                        scrolled ? 'nav-link-deep' : 'nav-link-light'
                      } nav-link-general`}
                    >
                      লোকেরা যা বলছে
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      activeClass={`${classes.active}`}
                      className={`${
                        scrolled ? 'nav-link-deep' : 'nav-link-light'
                      } nav-link-general`}
                    >
                      আমাদের সম্পর্কে
                    </Link>
                  </li>
                </ul>
              </div>

              {auth.user ? (
                // for LoggedIn user
                <ul className="items-center hidden space-x-8 lg:flex">
                  <li>
                    <Link
                      to="/dashboard"
                      className={`${
                        scrolled
                          ? 'text-gray-50  hover:text-deep-purple-50 bg-brand-900 hover:bg-deep-purple-accent-700'
                          : 'text-gray-50  hover:text-deep-purple-900 bg-brand-900 hover:bg-deep-purple-50'
                      } join-button-general`}
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      onClick={() => {
                        history.push('/dashboard');
                      }}
                    >
                      ড্যাশবোর্ড
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      className={`${
                        scrolled ? 'nav-link-deep' : 'nav-link-light'
                      } nav-link-general`}
                      onClick={() => {
                        signout(() => {
                          handleAuthChange();
                          history.push('/');
                        });
                      }}
                    >
                      লগ আউট
                    </Link>
                  </li>
                </ul>
              ) : (
                // For Non LoggedIn user
                <ul className="items-center hidden space-x-8 lg:flex">
                  <li>
                    <Link
                      to="/"
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      className={`${
                        scrolled ? 'nav-link-deep' : 'nav-link-light'
                      } nav-link-general`}
                      onClick={handleDesktopLogin}
                    >
                      লগ ইন
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`${
                        scrolled
                          ? 'text-gray-50  hover:text-deep-purple-50 bg-brand-900 hover:bg-deep-purple-accent-700'
                          : 'text-gray-50  hover:text-deep-purple-900 bg-brand-900 hover:bg-deep-purple-50'
                      } join-button-general`}
                      spy={true}
                      smooth={true}
                      delay={100}
                      offset={0}
                      duration={500}
                      onClick={handleDesktopSignIn}
                    >
                      জয়েন করো
                    </Link>
                  </li>
                </ul>
              )}

              {/* Mobile Nav View */}
              <div className="lg:hidden">
                {/* Open Menu Button */}
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-brand-900 focus:bg-brand-900"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg
                    className={`${
                      scrolled
                        ? 'text-brand-900 hover:text-white'
                        : 'text-white'
                    } w-5`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>

                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full">
                    <div className="p-5 bg-white border rounded shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          {/* Logo */}
                          <Link
                            to="/"
                            spy={true}
                            smooth={true}
                            delay={100}
                            offset={0}
                            duration={500}
                            className="inline-flex items-center"
                          >
                            <img
                              className="h-10"
                              src={textLogo}
                              alt="Text Logo"
                            />
                          </Link>
                        </div>
                        <div>
                          {/* Close Menu Button */}
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg
                              className="w-5 text-gray-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4">
                          <li>
                            <Link
                              to="simulation"
                              spy={true}
                              smooth={true}
                              delay={100}
                              offset={0}
                              duration={500}
                              activeClass={`${classes.active}`}
                              className="nav-link-mobile"
                            >
                              আমাদের সিমুলেশন
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="features"
                              spy={true}
                              smooth={true}
                              delay={100}
                              offset={0}
                              duration={500}
                              activeClass={`${classes.active} text-deep-purple-900 font-bold`}
                              className="nav-link-mobile"
                            >
                              আমাদের বৈশিষ্ট্য
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="testimonial"
                              spy={true}
                              smooth={true}
                              delay={100}
                              offset={0}
                              duration={500}
                              activeClass={`${classes.active} text-deep-purple-900 font-bold`}
                              className="nav-link-mobile"
                            >
                              লোকেরা যা বলছে
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="about"
                              spy={true}
                              smooth={true}
                              delay={100}
                              offset={0}
                              duration={500}
                              activeClass={`${classes.active}`}
                              className="nav-link-mobile"
                            >
                              আমাদের সম্পর্কে
                            </Link>
                          </li>
                          {isAuth() ? (
                            // For loggedIn user
                            <Fragment>
                              <li>
                                <Link
                                  to="/dashboard"
                                  className="join-button-mobile"
                                  spy={true}
                                  smooth={true}
                                  delay={100}
                                  offset={0}
                                  duration={500}
                                  onClick={() => {
                                    history.push('/dashboard');
                                  }}
                                >
                                  ড্যাশবোর্ড
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/"
                                  spy={true}
                                  smooth={true}
                                  delay={100}
                                  offset={0}
                                  duration={500}
                                  className="nav-link-mobile"
                                  onClick={() => {
                                    signout(() => {
                                      handleAuthChange();
                                      setIsMenuOpen(false);
                                      history.push('/');
                                    });
                                  }}
                                >
                                  লগ আউট
                                </Link>
                              </li>
                            </Fragment>
                          ) : (
                            // For Non loggedIn user
                            <Fragment>
                              <li>
                                <Link
                                  to="/"
                                  spy={true}
                                  smooth={true}
                                  delay={100}
                                  offset={0}
                                  duration={500}
                                  className="nav-link-mobile"
                                  onClick={handleMobileLogin}
                                >
                                  লগ ইন
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/"
                                  className="join-button-mobile"
                                  spy={true}
                                  smooth={true}
                                  delay={100}
                                  offset={0}
                                  duration={500}
                                  onClick={handleMobileSignIn}
                                >
                                  জয়েন করো
                                </Link>
                              </li>
                            </Fragment>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </header>
      </motion.div>

      {/* Login Modal Component */}
      {modalData.showLoginModal ? <LoginModal /> : null}
    </div>
  );
};

export default Nav;
