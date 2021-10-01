import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  defaultFadeInUpVariants,
  staggerFadeInUpVariants,
} from "Constants/motions";

const SignIn = ({ toggleIsSignIn }) => {
  //   const [email, sertEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const history = useHistory();

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const {
      target: { value, id },
    } = event;

    setInfo({ ...info, [id]: value });
  };

  const onSubmit = () => {
    history.push("/browse");
  };

  //애니메이션
  //react - ransition- group
  //framer - motion

  return (
    <motion.div
      className="auth"
      variants={staggerFadeInUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.span className="auth__title" variants={defaultFadeInUpVariants}>
        Sign In
      </motion.span>
      <motion.input
        id="email"
        variants={defaultFadeInUpVariants}
        className="auth__input"
        placeholder="Email"
        onChange={onChange}
      />
      <motion.input
        id="password"
        variants={defaultFadeInUpVariants}
        type="password"
        className="auth__input"
        placeholder="Password"
        onChange={onChange}
      />
      <motion.button
        className="auth__signinBtn auth__btn"
        variants={defaultFadeInUpVariants}
        onClick={onSubmit}
      >
        Sign In
      </motion.button>
      <motion.button
        className="auth__signinAnon auth__btn"
        variants={defaultFadeInUpVariants}
      >
        Sign in anonymously
      </motion.button>

      <motion.span className="auth__noti" variants={defaultFadeInUpVariants}>
        아직 가입하지 않으셨나요 ?{" "}
        <strong onClick={toggleIsSignIn}>회원가입</strong>
      </motion.span>
    </motion.div>
  );
};

export default SignIn;
