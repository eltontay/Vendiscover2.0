import React from 'react';
import { Section, Container, H1, Logo, H2, Button } from './Landingpagestyle';
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
        <p1h>
          BOOPIE <p1>brings</p1>
        </p1h>
        <p2>Vending Machines</p2>
        <p3>
          to the <p3h>Palm</p3h>
        </p3>
        <p4>
          of your <p4h>Hands</p4h>
        </p4>
      </Container>
    </Section>
  );
};

export default Landingpage;
