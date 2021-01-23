import React from 'react';
import {
  Section,
  Container,
  H1,
  Logo,
  H2,
  Button,
  P1H,
  P1,
  P2,
  P3,
  P3H,
  P4,
  P4H,
} from './Landingpagestyle';
import Space from '../images/spacedoodle.png';
import Boopie from '../images/Boopie.jpeg';
import { motion } from 'framer-motion';
import {
  animationOne,
  vendingmachineAnimationOne,
  vendingmachineAnimationTwo,
  logoAnimationOne,
  logoAnimationTwo,
  H1animation,
  H2animation,
  ButtonanimationHover,
  ButtonanimationTap,
  P1Hanimation,
  P1animation,
  P3animation,
  P3Hanimation,
  P4animation,
  P4Hanimation,
} from '../animation';

const Landingpage = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
      <Section image={Space}>
        <Container>
          <H1 whileHover={H1animation}>MEET</H1>
          <Logo
            src={Boopie}
            animate={logoAnimationOne}
            whileHover={logoAnimationTwo}
          />
          <H2 whileHover={H2animation}>BOOPIE</H2>
          <Button
            whileHover={ButtonanimationHover}
            whileTap={ButtonanimationTap}
          >
            BOOP!
          </Button>
          <div>
            <P1H whileHover={P1Hanimation}>BOOPIE</P1H>
            <P1 whileHover={P1animation}>BRINGS</P1>
          </div>
          <P2
            whileHover={vendingmachineAnimationTwo}
            animate={vendingmachineAnimationOne}
          >
            VENDING MACHINES
          </P2>
          <div>
            <P3 whileHover={P3animation}>TO THE </P3>
            <P3H whileHover={P3Hanimation}>PALM</P3H>
          </div>
          <div>
            <P4 whileHover={P4animation}>OF YOUR </P4>
            <P4H whileHover={P4Hanimation}>HANDS</P4H>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Landingpage;
