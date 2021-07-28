import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { motion } from "framer-motion";
import React, { Fragment, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import { ModalContext } from "../../App";
import resetPasswordLoader from "../../assets/images/loader/resetPassword.gif";
import useWindowDimensions from "../../utils/useWindowDimensions";

const ResetPasswordModal = () => {
  let { jwtToken } = useParams();
  const history = useHistory();
  // modal context value
  const modalData = useContext(ModalContext);

  // get device width from custom hooks
  const { width } = useWindowDimensions();

  let notificationWidth =
    width > 500 ? "480px" : width > 400 ? "390px" : "370px";

  // for handling modal functionality
  const handleCloseModal = () => {
    modalData.setShowHeader("block");
    modalData.setShowResetPasswordModal(false);
    history.push("/");
  };

  const handleStrongPassword = () => {
    toast(
      "পাসওয়ার্ডটি কমপক্ষে ৮ টি অক্ষরের দীর্ঘ হতে হবে এবং কমপক্ষে একটি ছোট হাতের অক্ষর, একটি বড় হাতের অক্ষর, একটি নম্বর এবং একটি চিহ্ন থাকতে হবে!",
      {
        icon: "🙏",
      }
    );
  };

  // set form data states
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: jwtToken,
    textChange: "জমা দিন",
  });

  const { password1, password2, textChange, token } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  // submit reset password
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password1 && password2) {
      if (password1 === password2) {
        const loading = toast.loading("অনুগ্রহপূর্বক অপেক্ষা করুন...⏳");
        setFormData({ ...formData, textChange: "জমা দেওয়া হচ্ছে" });
        axios
          .put(`${process.env.REACT_APP_API_URL}/resetpassword`, {
            newPassword: password1,
            resetPasswordLink: token,
          })
          .then((res) => {
            setFormData({
              ...formData,
              password1: "",
              password2: "",
              textChange: "জমা দেওয়া হয়েছে",
            });
            toast.dismiss(loading);
            toast.success(res.data.message);
          })
          .catch((err) => {
            setFormData({
              ...formData,
              password1: "",
              password2: "",
              textChange: "জমা দিন",
            });
            toast.dismiss(loading);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error("পাসওয়ার্ড দুটির মধ্যে মিল খুঁজে পাওয়া যায়নি! 🤨");
      }
    } else {
      toast.error("অনুগ্রহপূর্বক সবগুলো স্থান তথ্য দিয়ে পূরণ করুন! 😒");
    }
  };

  return (
    <Fragment>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            minWidth: `${notificationWidth}`,
            fontFamily: "Hind Siliguri",
          },
        }}
      />
      <motion.div
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
          <div className="relative mt-12 mb-4 lg:mt-6 2xl:mt-8 flex w-full max-w-sm md:max-w-lg lg:max-w-3xl 2xl:max-w-4xl mx-auto overflow-hidden bg-transparent rounded-lg">
            <div className="flex flex-col items-center justify-center mx-auto">
              <div className="w-full min-h-auto bg-cover bg-no-repeat bg-center rounded-lg shadow-xl">
                <img
                  src={resetPasswordLoader}
                  alt="activation-loader"
                  className="rounded-lg"
                />
              </div>

              <div className="w-80 -mt-4 lg:-mt-8 overflow-hidden bg-white rounded-lg shadow-lg md:w-98">
                <div className="flex pt-2 pr-2">
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
                <div className="flex flex-col items-center">
                  <h1 className="-mt-4 text-base md:text-xl lg:text-2xl font-body text-gray-900 font-semibold">
                    আপনার নতুন পাসওয়ার্ড সেট করুন
                  </h1>

                  <form
                    className="mx-auto max-w-xs relative "
                    onSubmit={handleSubmit}
                  >
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
                          type="password"
                          className="login-input"
                          placeholder="আপনার পাসওয়ার্ড প্রদান করুন"
                          onChange={handleChange("password1")}
                          value={password1}
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
                          onChange={handleChange("password2")}
                          value={password2}
                        />
                      </div>
                    </div>
                    <div className="mx-auto w-48 md:w-80 relative">
                      <button
                        type="submit"
                        className="w-full px-4 py-2 mt-2 mb-6 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                      >
                        {textChange}
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

export default ResetPasswordModal;
