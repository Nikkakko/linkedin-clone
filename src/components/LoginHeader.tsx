import { FC } from 'react';
import LinkedinLogo from '../assets/LinkedInLogo.png';
import styled from 'styled-components';

interface LoginHeaderProps {}

const LoginHeader: FC<LoginHeaderProps> = ({}) => {
  return (
    <LogoWrapper>
      <LogoText>Linkedin</LogoText>
      <LogoImage src={LinkedinLogo} alt='Linkedin Logo' />
    </LogoWrapper>
  );
};

const Container = styled.div``;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 56px;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
`;

const LogoText = styled.h1`
  font-family: system-ui;
  font-weight: 700;
  font-size: 30px;
  color: #0a66c2;
`;
export default LoginHeader;
