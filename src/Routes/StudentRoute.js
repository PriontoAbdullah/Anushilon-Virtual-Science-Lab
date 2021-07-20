import React, { useContext } from "react";
import { Route, useHistory } from "react-router-dom";
import { ModalContext } from "../App";
import { isAuth } from "../helpers/auth";

const StudentRoute = ({ children, ...rest }) => {
  const history = useHistory();
  // modal context value
  const modalData = useContext(ModalContext);

  function handleScroll() {
    window.scrollBy({
      top: 5,
      left: 0,
      behavior: "smooth",
    });
  }

  const openLoginModal = () => {
    history.push("/");
    handleScroll();
    modalData.setShowHeader("hidden");
    modalData.setShowLoginModal(true);
    modalData.setNewUser(false);
  };

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth() && isAuth().role === "student" ? children : openLoginModal()
      }
    />
  );
};

export default StudentRoute;
