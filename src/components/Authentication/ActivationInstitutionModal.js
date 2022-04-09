import { motion } from 'framer-motion';
import React, { Fragment, useContext } from 'react';
import { ModalContext } from '../../App';

const ActivationInstitutionModal = () => {
  // modal context value
  const modalData = useContext(ModalContext);

  // for handling modal functionality
  const handleCloseModal = () => {
    modalData.setShowHeader('block');
    modalData.setShowActivationUserModal(false);
  };

  const handleRegistrationModal = () => {
    handleCloseModal();
    modalData.setShowHeader('hidden');
    modalData.setShowLoginModal(true);
    modalData.setNewUser(true);
    modalData.setShowRegistrationModal(true);
  };

  return (
    <Fragment>
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
          <div className="relative mt-10 mb-4 lg:mt-6 2xl:mt-8 flex w-full max-w-sm md:max-w-lg lg:max-w-3xl 2xl:max-w-4xl mx-auto overflow-hidden bg-transparent rounded-lg">
            <div className="flex flex-col items-center justify-center mx-auto">
              <div className="max-w-md min-h-auto bg-cover bg-no-repeat bg-center rounded-lg shadow-xl">
                <img
                  src="https://cdn.dribbble.com/users/6033/screenshots/6287202/800x600_1.gif"
                  alt="activation-loader"
                  className="rounded-lg"
                />
              </div>

              <div className="-mt-4 overflow-hidden bg-white rounded-lg shadow-lg ">
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
                  <p className="text-base lg:text-lg font-body text-gray-800 font-normal px-8 -mb-2 leading-normal tracking-wide">
                    আপনার অ্যাকাউন্টটি সচল করার জন্য{' '}
                    <span className="line-through">
                      {' '}
                      আপনার তথ্য গুলি আপনার শিক্ষাপ্রতিষ্ঠানের কাছে পাঠানো
                      হয়েছে। আপনাকে ফোন করে যাচাই হওয়ার পর আপনার একাউন্টটি একটিভ
                      করার জন্য{' '}
                    </span>{' '}
                    আপনাকে ইমেইল পাঠানো হবে। অনুগ্রহ করে আপনার ইমেইল চেক করুন।
                    অথবা আপনি এই মুহূর্তে শিক্ষা প্রতিষ্ঠান ছাড়া স্বতন্ত্র ভাবে
                    নিবন্ধন করে সকল সুযোগ সুবিধা ভোগ করতে পারবেন।
                  </p>

                  <div className="w-full flex-1 my-3 text-indigo-500">
                    <div className="border-b text-center">
                      <div className="leading-none px-2 inline-block text-base lg:text-lg font-body text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                        অথবা নিবন্ধন করুন স্বতন্ত্র ভাবে
                      </div>
                    </div>
                    <div className="mx-auto w-60 lg:w-80 relative">
                      <button
                        className="w-full px-4 py-2 mt-6 mb-4 font-semibold font-body text-base lg:text-lg tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                        onClick={handleRegistrationModal}
                      >
                        স্বতন্ত্র ভাবে নিবন্ধন করুন
                      </button>
                    </div>
                  </div>
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

export default ActivationInstitutionModal;
