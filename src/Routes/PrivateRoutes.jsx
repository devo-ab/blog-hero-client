import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
// import axios from "axios";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-spinner text-primary text-center"></span>;
  }

  // const userEmail = user?.email;
  // const loggedUser = { email: userEmail };

  if (user) {
    // axios.post("http://localhost:5000/jwt", loggedUser, { withCredentials: true }).then((res) => {
    //   console.log("token response", res.data);
    // });

    return children;
  }
  return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
