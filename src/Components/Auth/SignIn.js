import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  defaultFadeInUpVariants,
  staggerFadeInUpVariants,
} from "Constants/motions";
import Input from "Components/Auth/Input";
import { useRecoilState } from "recoil";
import { currentUserState } from "Store";
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

  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  // user 관리 custom hook
  // 브라우즈 접속할 때 로그인 안돼있으면 로그인으로
  // 브라우즈 스타일링 > 영화 API
  const onSubmit = () => {
    setCurrentUser(info.email);
    console.log(`${info.email}님 환영합니다`);
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

      <Input
        id="email"
        placeholder="Email"
        value={info.email}
        onChange={onChange}
      />

      <Input
        id="password"
        placeholder="Password"
        value={info.password}
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
