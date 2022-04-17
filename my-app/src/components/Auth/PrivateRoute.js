// video tutorial: https://www.youtube.com/watch?v=unr4s3jd9qA
   
import React, { useContext } from "react";
import { Route, Navigate,Outlet } from "react-router";
import { AuthContext } from "./Auth.js";
import Home from "../../Home.js"
import Login from "./Login.js";

const PrivateRoute = ()  => {
    const { currentUser } = useContext(AuthContext);

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    /* return (
      <div
        {...rest}
        render={routeProps =>
          !!currentUser ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
    ); */
    return currentUser ? (<div><Home /></div>) : (<div><Login/></div>);
}

/* const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Navigate to={"/login"} />
        )
      }
    />
  );
}; */


export default PrivateRoute