import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

import background from '../../assets/background.jpg';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  background-image: url(${background});

  display: flex;
  flex-direction: row;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContactContainer = styled.div`
  display: flex;

  align-items: center;
  background: #121212;

  position: absolute;
  bottom: 20px;
  left: 20px;

  color: #fff;

  padding: 8px 12px;

  border-radius: 5px;
  gap: 10px;

  a {
    color: #fff;
  }

  @media (max-width: 960px) {
    bottom: 93%;
  }
`;

export const LinkedinIcon = styled(IoLogoLinkedin)`
  font-size: 24px;

  cursor: pointer;

  transition: 0.25s;
  :hover {
    transform: translateY(-5px);
  }
`;

export const GithubIcon = styled(IoLogoGithub)`
  font-size: 24px;

  cursor: pointer;

  transition: 0.25s;
  :hover {
    transform: translateY(-5px);
  }
`;
