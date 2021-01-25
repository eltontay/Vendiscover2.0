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
  scale: 1.2,
  transition: {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

export const vendingmachineAnimationTwo = {
  scale: 1.3,
  transition: {
    duration: 0.3,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

export const logoAnimationOne = {
  y: [20, -20],
  x: 0,
  transition: {
    duration: 1,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

export const logoAnimationTwo = {
  y: [20, -20],
  x: 0,
  transition: {
    duration: 0.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

export const H1animation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const H2animation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const ButtonanimationHover = {
  scale: 1.3,
  transition: { duration: 0.3 },
};

export const ButtonanimationTap = {
  scale: 0.9,
  transition: { duration: 0.1 },
};

export const P1Hanimation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const P1animation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const P3animation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const P3Hanimation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const P4Hanimation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const P4animation = {
  scale: 1.1,
  transition: { duration: 0.3 },
};

export const transition = {
  duration: 0.4,
};
