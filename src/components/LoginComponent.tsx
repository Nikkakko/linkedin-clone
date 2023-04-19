import { FC } from 'react';
import { LoginAPI } from '../api/AuthAPI';
import styled from 'styled-components';

interface LoginComponentProps {}

const LoginComponent: FC<LoginComponentProps> = ({}) => {
  const login = () => {
    LoginAPI();
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginButton onClick={login}>Login to Linkedin</LoginButton>
    </div>
  );
};

const LoginButton = styled.button`
  width: 150px;
  height: 30px;
  cursor: pointer;
  background-color: #0a66c2;
  color: white;
  border: none;
`;

export default LoginComponent;
