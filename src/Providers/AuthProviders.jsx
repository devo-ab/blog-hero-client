import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   signIn/signUp start

  const createUserWithEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   signIn/signUp end

  // user Auth State start
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  // user Auth State end

  const authInfo = { user, loading, createUserWithEmailPass, signInWithEmailPass, signInWithGoogle, signInWithGithub, signInWithTwitter, logOut };

  return <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>;
};

AuthProviders.propTypes = {
  children: PropTypes.node,
};

export default AuthProviders;
