export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerOne = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerFadeInUpVariants = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: defaultEasing,
      staggerChildren: 0.1,
    },
    willChange: "opacity, transform",
  },
  exit: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};

export const defaultFadeInUpVariants = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.3, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};
