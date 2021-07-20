import React, { Fragment, useContext, useEffect } from "react";
import { ModalContext } from "../App";
import ActivationModal from "../components/Authentication/ActivationModal";
import Home from "./Home";

const Activation = () => {
  // modal context value
  const modalData = useContext(ModalContext);

  // open activation modal
  useEffect(() => {
    modalData.setShowHeader("hidden");
    modalData.setShowActivationModal(true);
  }, [modalData]);

  return (
    <Fragment>
      <Home />
      {/* Activation Modal Component */}
      {modalData.showActivationModal ? <ActivationModal /> : null}
    </Fragment>
  );
};

export default Activation;
