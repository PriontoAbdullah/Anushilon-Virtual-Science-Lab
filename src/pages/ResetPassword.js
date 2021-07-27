import React, { Fragment, useContext, useEffect } from "react";
import { ModalContext } from "../App";
import ResetPasswordModal from "../components/Authentication/ResetPasswordModal";
import Home from "./Home";

const ResetPassword = () => {
  // modal context value
  const modalData = useContext(ModalContext);

  // open reset password modal
  useEffect(() => {
    modalData.setShowHeader("hidden");
    modalData.setShowResetPasswordModal(true);
  }, [modalData]);

  return (
    <Fragment>
      <Home />
      {/* reset password modal component */}
      {modalData.showResetPasswordModal ? <ResetPasswordModal /> : null}
    </Fragment>
  );
};

export default ResetPassword;
