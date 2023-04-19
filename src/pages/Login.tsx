import { FC } from 'react';
import LoginComponent from '../components/LoginComponent';
import { LoginAPI } from '../api/AuthAPI';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return <LoginComponent />;
};

export default Login;
