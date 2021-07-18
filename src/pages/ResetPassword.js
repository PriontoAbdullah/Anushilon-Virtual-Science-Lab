import React, { Fragment, useContext } from "react";
import { ModalContext } from "../App";
import ResetPasswordModal from "../components/Authentication/ResetPasswordModal";
import Home from "./Home";

const ResetPassword = () => {
  // modal context value
  const modalData = useContext(ModalContext);

  // open reset password modal
  modalData.setShowHeader("hidden");
  modalData.setShowResetPasswordModal(true);

  return (
    <Fragment>
      <Home />
      {/* reset password modal component */}
      {modalData.showResetPasswordModal ? <ResetPasswordModal /> : null}
    </Fragment>
  );
};

export default ResetPassword;
