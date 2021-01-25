import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const SocialMedia = styled.section`
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const SocialLogo = styled(Link)`
  color: #331e54;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: bold;

  &:hover {
    color: #ff5251;
    transition: 0.1s ease-out;
  }
`;

export const WebsiteRights = styled.small`
  color: #331e54;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #ff5251;
    transition: 0.1s ease-out;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #331e54;
  font-size: 2rem;

  &:hover {
    color: #ff5251;
    transition: 0.1s ease-out;
  }
`;
