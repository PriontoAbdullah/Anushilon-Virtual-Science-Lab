import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { ModalContext } from "../App";

const StudentRoute = ({ children, ...rest }) => {
  const history = useHistory();
  const { auth } = useSelector((state) => state);
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
        auth.user && auth.user.role === "student"
          ? children
          : // <Redirect
            //   to={{
            //     pathname: "/",
            //     state: { from: location },
            //   }}
            // />
            openLoginModal()
      }
    />
  );
};

export default StudentRoute;
