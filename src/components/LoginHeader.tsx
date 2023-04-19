import { FC } from 'react';
import LinkedinLogo from '../assets/LinkedInLogo.png';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface LoginHeaderProps {}

const LoginHeader: FC<LoginHeaderProps> = ({}) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };
  return (
    <LogoWrapper onClick={handleOnClick}>
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
  cursor: pointer;
`;

const LogoText = styled.h1`
  font-family: system-ui;
  font-weight: 700;
  font-size: 30px;
  cursor: pointer;

  color: #0a66c2;
`;
export default LoginHeader;
