import { staggerFadeInUpVariants } from "../../Constants/motions/index";
import { motion } from "framer-motion";
import Input from "./Input";
import { defaultFadeInUpVariants } from "Constants/motions";
import useCurrentUser from "../../Hooks/useCurrentUser";
import { useState } from "react";
const SignUp = ({ toggleIsSignIn }) => {
  const [info, setInfo] = useState();
  const { setCurrentUser } = useCurrentUser();

  return (
    <motion.div
      ket="signup"
      className="auth"
      variants={staggerFadeInUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.span className="auth__title" variants={defaultFadeInUpVariants}>
        SignUp
      </motion.span>

      <Input id="name" placeholder="Name" />
      <Input id="email" placeholder="Email" />
      <Input id="Password" placeholder="Password" />
      <Input id="passwordConfirm" placeholder="Repeat Password" />

      <motion.button className="auth__signinAnon auth__btn">
        Sign Up
      </motion.button>

      <motion.span className="auth__noti">
        계정이 있으신가요 ? <strong onClick={toggleIsSignIn}>로그인</strong>
      </motion.span>
    </motion.div>
  );
};

export default SignUp;
