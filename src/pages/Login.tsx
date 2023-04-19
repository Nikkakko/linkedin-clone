import { FC, useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import { LoginAPI } from '../api/AuthAPI';
import styled from 'styled-components';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return <LoginComponent />;
};

export default Login;
