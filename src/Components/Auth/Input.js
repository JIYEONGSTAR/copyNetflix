import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "Constants/motions";

const Input = ({ id, placeholder, value, onChange }) => {
  return (
    <motion.div
      className="auth__inputWrapper"
      variants={defaultFadeInUpVariants}
    >
      <input
        id={id}
        required
        className="auth__inputWrapper__input"
        value={value}
        onChange={onChange}
      />
      <span className="auth__inputWrapper__placeholder">{placeholder}</span>
      <span className="auth__inputWrapper__line"></span>
    </motion.div>
  );
};

export default Input;
