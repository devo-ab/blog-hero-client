import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/firebase.config";

const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


//   signIn/signUp start
//   signIn/signUp end



  // user Auth State start
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changed', currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return () => {
        unSubscribe();
    }
}, []);
// user Auth State end




  const authInfo = { user, loading };

  return (<AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>);
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};

export default AuthProviders;
