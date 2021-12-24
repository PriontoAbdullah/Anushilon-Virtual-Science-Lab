import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { motion } from 'framer-motion';
import jwt from 'jsonwebtoken';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, useParams } from 'react-router-dom';
import { ModalContext } from '../../App';
import activationLoader from '../../assets/images/loader/activationModal.gif';
import useWindowDimensions from '../../utils/useWindowDimensions';

const ActivationModal = () => {
  const history = useHistory();
  // modal context value
  const modalData = useContext(ModalContext);

  // get device width from custom hooks
  const { width } = useWindowDimensions();

  let notificationWidth =
    width > 500 ? '480px' : width > 400 ? '390px' : '370px';

  // for handling modal functionality
  const handleCloseModal = () => {
    modalData.setShowHeader('block');
    modalData.setShowActivationModal(false);
    history.push('/');
  };

  // set form data states
  const [formData, setFormData] = useState({
    name: '',
    token: '',
    show: true,
  });

  // decode jew token and set in form data
  let { token } = useParams();
  useEffect(() => {
    let { name } = jwt.decode(token);

    if (token) {
      setFormData((prevState) => ({ ...prevState, name, token }));
    }
  }, [token]);

  const { name } = formData;

  // submit activation token
  const handleSubmit = (e) => {
    e.preventDefault();
    const loading = toast.loading('অনুগ্রহপূর্বক অপেক্ষা করুন...⏳');
    axios
      .post(`${process.env.REACT_APP_API_URL}/activation`, {
        token,
      })
      .then((res) => {
        toast.dismiss(loading);
        toast.success(res.data.message);
        setFormData({
          ...formData,
          show: false,
        });

        // open login modal
        history.push('/');
        modalData.setShowHeader('hidden');
        modalData.setShowRegistrationModal(false);
        modalData.setNewUser(false);
        modalData.setShowLoginModal(true);
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  return (
    <Fragment>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            minWidth: `${notificationWidth}`,
            fontFamily: 'Hind Siliguri',
          },
        }}
      />
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
          <div className="relative mt-16 mb-4 lg:mt-10 2xl:mt-12 flex w-full max-w-sm md:max-w-lg lg:max-w-3xl 2xl:max-w-4xl mx-auto overflow-hidden bg-transparent rounded-lg">
            <div className="flex flex-col items-center justify-center mx-auto">
              <div className="w-full min-h-auto bg-cover bg-no-repeat bg-center rounded-lg shadow-xl">
                <img
                  src={activationLoader}
                  alt="activation-loader"
                  className="rounded-lg"
                />
              </div>

              <div className="w-72 -mt-6 sm:-mt-7 lg:-mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 lg:w-98">
                <div className="pt-1 pr-1">
                  {/* Close Button */}
                  <button
                    className="close-button"
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
                </div>
                <div className="mt-8 flex flex-col items-center">
                  <h1 className="text-lg sm:text-xl lg:text-2xl mx-4 font-body text-gray-900 font-semibold">
                    স্বাগতম 💐 {name}
                  </h1>

                  <form
                    className="w-full flex-1 my-2 text-indigo-500"
                    onSubmit={handleSubmit}
                  >
                    <div className="border-b text-center">
                      <div className="leading-none px-2 inline-block text-sm lg:text-base font-body text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                        অনুগ্রহ করে আপনার একাউন্ট একটিভ করুন
                      </div>
                    </div>
                    <div className="mx-auto w-48 sm:w-60 lg:w-72 relative">
                      <button
                        type="submit"
                        className="mt-8 mb-6 text-sm md:text-base tracking-wide font-body font-semibold bg-indigo-500 text-gray-100 w-full px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
                        <FontAwesomeIcon icon={faUser} className="w-6 -ml-2" />
                        <span className="ml-3">অ্যাকাউন্ট সচল করুন</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Modal Opacity */}
        <div className="opacity-25 fixed inset-0 z-40 bg-brand-900" />
      </motion.div>
    </Fragment>
  );
};

export default ActivationModal;
