export const animationOne = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const animationTwo = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: '-100vh',
    scale: 0.3,
  },
};

export const animationThree = {
  in: {
    opacity: 1,
    x: -300,
  },
  out: {
    opacity: 0,
    x: 300,
  },
  end: {
    x: 0,
    opacity: 1,
  },
};

export const vendingmachineAnimationOne = {
  x: [0, 20],
  y: [10, -10],
  transition: {
    x: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.5,
      damping: 500,
    },
    y: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.25,
      damping: 500,
    },
  },
};

export const vendingmachineAnimationTwo = {
  x: [0, 20],
  y: [10, -10],
  transition: {
    x: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 1,
      damping: 500,
    },
    y: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.5,
      damping: 500,
    },
  },
};

export const logoAnimationOne = {
  y: [20, -20],
  x: 0,
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeOut',
  },
};

export const logoAnimationTwo = {
  y: [20, -20],
  x: 0,
  transition: {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeOut',
  },
};

export const transition = {
  duration: 0.4,
};
