import styled from 'styled-components';
import { motion } from 'framer-motion';

// to put a background image
export const Section = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background: url(${({ image }) => image && image}) center;
  background-repeat: no-repeat;

  z-index: -1;
`;

export const Container = styled.div`
  width: 60%;
  height: 90%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  flex-direction: column;

  text-align: center;
  flex-wrap: wrap;
`;

export const H1 = styled(motion.header)`
  font-size: clamp(1.5rem, 9vw, 3rem);
  font-weight: bold;
  color: #204e9c;
  margin-bottom: 1rem;
`;

export const Logo = styled(motion.img)`
  height: calc(554px / 4);
  width: calc(484px / 4);
  margin-bottom: 1rem;
`;

export const H2 = styled(motion.header)`
  font-size: clamp(1.5rem, 9vw, 3rem);
  font-weight: bold;
  color: #fb2e01;
  margin-bottom: 1rem;
`;

export const Button = styled(motion.button)`
  padding: 1rem 2.2rem;
  background-color: #ff5251;

  color: white;
  font-weight: bold;
  font-size: 1.2rem;

  border: 1px solid #fff;
  border-radius: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const P1H = styled(motion.object)`
  font-size: clamp(1.5rem, 5vw, 2.4rem);
  font-weight: bold;
  color: #0095dd;
  float: left;
  text-align: right;
  backdrop-filter: blur(6px);
`;

export const P1 = styled(motion.object)`
  font-size: clamp(0.8rem, 4vw, 2rem);
  font-weight: bold;
  color: #331e54;
  float: right;
  text-align: left;
  margin-left: 1rem;
  margin-top: 0.25rem;
  backdrop-filter: blur(6px);
`;

export const P2 = styled(motion.object)`
  font-size: clamp(1.5rem, 5vw, 2.4rem);
  font-weight: bold;
  color: #e66000;
  margin-top: 0.5rem;
  backdrop-filter: blur(6px);
`;

export const P3 = styled(motion.object)`
  font-size: clamp(0.8rem, 4vw, 2rem);
  font-weight: bold;
  color: #331e54;
  margin-top: 1rem;
  float: left;
  backdrop-filter: blur(6px);
`;

export const P3H = styled(motion.object)`
  font-size: clamp(1.5rem, 5vw, 2.4rem);
  font-weight: bold;
  color: #ff9500;
  margin-left: 1rem;
  margin-top: 0.75rem;
  float: right;
  backdrop-filter: blur(6px);
`;

export const P4 = styled(motion.object)`
  font-size: clamp(0.8rem, 4vw, 2rem);
  font-weight: bold;
  color: #0fb5ee;
  float: left;
  margin-top: 1rem;
  backdrop-filter: blur(6px);
`;

export const P4H = styled(motion.object)`
  font-size: clamp(1.5rem, 5vw, 2.4rem);
  font-weight: bold;
  color: #fb2e01;
  margin-left: 1rem;
  margin-top: 0.75rem;
  float: right;
  backdrop-filter: blur(6px);
`;
