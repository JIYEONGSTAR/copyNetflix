import React, { useState } from "react";
import "Pages/Auth/index.scss";
import SignIn from "Components/Auth/SignIn";
import SignUp from "Components/Auth/SignUp";
import { motion, AnimatePresence } from "framer-motion";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <motion.div className="wrapper">
      <h1 className="wrapper__title">JYflix</h1>
      <img className="wrapper__bg" src="/images/bg.jpg" alt="background" />
      <button onClick={() => setIsSignIn(false)}>바꾸기</button>
      <AnimatePresence initial exitBeforeEnter>
        {isSignIn ? (
          <SignIn key="signin" toggleIsSignIn={toggleIsSignIn} />
        ) : (
          <SignUp key="signup" toggleIsSignIn={toggleIsSignIn} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Auth;
