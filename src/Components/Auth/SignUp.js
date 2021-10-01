import {
  staggerFadeInUpVariants,
  staggerOne,
} from "../../Constants/motions/index";
import { motion } from "framer-motion";

const SignUp = ({ toggleIsSignIn }) => {
  return (
    <motion.div
      ket="signup"
      className="auth"
      variants={staggerFadeInUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>나는회원가입</h1>

      <span className="auth__noti">
        계정이 있으신가요 ? <strong onClick={toggleIsSignIn}>로그인</strong>
      </span>
    </motion.div>
  );
};

export default SignUp;
