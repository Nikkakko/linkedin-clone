import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import LoginHeader from '../components/LoginHeader';

interface LoginLayoutProps {}

const LoginLayout: FC<LoginLayoutProps> = ({}) => {
  return (
    <Container>
      <LoginHeader />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffff;
`;

export default LoginLayout;
