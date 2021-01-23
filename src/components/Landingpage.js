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
} from '../animation';

const Landingpage = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationOne}>
      <Section image={Space}>
        <Container>
          <H1
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            MEET
          </H1>
          <Logo
            src={Boopie}
            animate={logoAnimationOne}
            whileHover={logoAnimationTwo}
          />
          <H2
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          >
            BOOPIE
          </H2>
          <Button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            BOOP!
          </Button>
          <div>
            <P1H
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              BOOPIE
            </P1H>
            <P1
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              BRINGS
            </P1>
          </div>
          <P2
            whileHover={vendingmachineAnimationTwo}
            animate={vendingmachineAnimationOne}
          >
            VENDING MACHINES
          </P2>
          <div>
            <P3
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              TO THE{' '}
            </P3>
            <P3H
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              PALM
            </P3H>
          </div>
          <div>
            <P4
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              OF YOUR{' '}
            </P4>
            <P4H
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              HANDS
            </P4H>
          </div>
        </Container>
      </Section>
    </motion.div>
  );
};

export default Landingpage;
