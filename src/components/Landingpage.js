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

const Landingpage = () => {
  return (
    <Section image={Space}>
      <Container>
        <H1>MEET</H1>
        <Logo
          src={Boopie}
          animate={{ y: [0, -10], x: 0 }}
          transition={{
            duration: 1,
            yoyo: Infinity,
            ease: 'easeOut',
          }}
        />
        <H2>BOOPIE</H2>
        <Button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Boop!
        </Button>
        <P1H>
          BOOPIE <P1>brings</P1>
        </P1H>
        <P2>Vending Machines</P2>
        <P3>
          to the <P3H>Palm</P3H>
        </P3>
        <P4>
          of your <P4H>Hands</P4H>
        </P4>
      </Container>
    </Section>
  );
};

export default Landingpage;