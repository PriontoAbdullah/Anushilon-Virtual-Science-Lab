import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isAuth } from "../helpers/auth";

const TeacherRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={({ location }) =>
      isAuth() && isAuth().role === "teacher" ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      )
    }
  />
);

export default TeacherRoute;
