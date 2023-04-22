import { FC, useContext, useEffect, useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Loader from '../components/common/Loader';

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user]);
  return <LoginComponent />;
};

export default Login;
