import React, { createContext, Fragment, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Registration from "./components/Authentication/Registration";
import PageNotFound from "./components/HomePage/Content/PageNotFound";
import Landing from "./components/Preloader/Landing";
import Activation from "./pages/Activation";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import StudentRoute from "./Routes/StudentRoute";
export const ModalContext = createContext();

const App = () => {
  // initial states
  const [preLoaderVisibility, setPreLoaderVisibility] = useState(true);
  const [newUser, setNewUser] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showActivationModal, setShowActivationModal] = useState(false);
  const [showActivationUserModal, setShowActivationUserModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [showHeader, setShowHeader] = useState("block");

  // For Pre-Loader Function
  const keyUpTimer = useRef(null);
  const keyUpTimerDelay = 2000;
  clearTimeout(keyUpTimer.current);

  keyUpTimer.current = setTimeout(() => {
    setPreLoaderVisibility(false);
  }, keyUpTimerDelay);

  // ModalContext
  const modalContextValue = {
    newUser,
    setNewUser,
    showHeader,
    setShowHeader,
    showLoginModal,
    setShowLoginModal,
    showRegistrationModal,
    setShowRegistrationModal,
    showActivationModal,
    setShowActivationModal,
    showResetPasswordModal,
    setShowResetPasswordModal,
    showActivationUserModal,
    setShowActivationUserModal,
  };

  return (
    <Fragment>
      {/* Pre Loader */}
      {preLoaderVisibility ? (
        <Landing />
      ) : (
        <Fragment>
          <ModalContext.Provider value={modalContextValue}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/users/activate/:token">
                  <Activation />
                </Route>
                <Route exact path="/users/password/reset/:jwtToken">
                  <ResetPassword />
                </Route>
                <Route exact path="/registration">
                  <Registration />
                </Route>
                <StudentRoute exact path="/simulation-phy">
                  <Dashboard />
                </StudentRoute>

                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </Router>
          </ModalContext.Provider>
        </Fragment>
      )}
    </Fragment>
  );
};

export default App;
