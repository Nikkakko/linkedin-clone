import { FC, useState } from 'react';
import { LoginAPI, RegisterAPI } from '../api/AuthAPI';
import styled from 'styled-components';

interface LoginComponentProps {}

type Credentials = {
  email: string;
  password: string;
};

const LoginComponent: FC<LoginComponentProps> = ({}) => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginWrapper>
      <AuthInputs>
        <Heading>Sign in</Heading>
        <Subtitle>Stay updated on your professional world</Subtitle>
        <Input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleOnChange}
        />
        <Input
          type={showPassword ? 'text' : 'password'}
          name='password'
          placeholder='Password'
          onChange={handleOnChange}
        />
        <ShowPassword onClick={() => setShowPassword(!showPassword)}>
          <span>{showPassword ? 'Hide' : 'Show'}</span>
        </ShowPassword>
        <LoginButton onClick={login}>Sign in</LoginButton>
      </AuthInputs>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButton = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: #0a66c2;
  color: white;
  border: none;
  border-radius: 28px !important;
  align-self: center;
  padding: 12px 24px;
  font-family: system-ui;
  font-size: 16px;

  &:hover {
    background-color: #004182;
    transition: 0.2s;
  }
`;

const Input = styled.input`
  height: 20px;
  padding: 28px;
  background-color: white;
  outline: none;
  border: 1px solid #212121;
  color: #212121;
  border-radius: 3px;
  font-family: system-ui;
  font-size: 16px;

  &:focus {
    outline: 1px solid #0a66c2;
  }

  &::placeholder {
    font-family: system-ui;
    font-size: 16px;
  }
`;

const Heading = styled.h1`
  font-family: system-ui;
  font-weight: 500;

  color: rgba(0, 0, 0, 0.9);
`;

const Subtitle = styled.p`
  font-family: system-ui;
`;

const AuthInputs = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`;

const ShowPassword = styled.div`
  position: absolute;
  right: 40px;
  top: 200px;
  /* padding: 28px; */

  span {
    font-family: system-ui;
    font-size: 14px;
    text-transform: lowercase;

    cursor: pointer;
    color: #0a66c2;
    &:hover {
      border-radius: 10px;
      background-color: #0a66c267;
      padding: 0px 8px;
      color: white;
      transition: all 0.2s ease-in-out;
    }
  }
`;

export default LoginComponent;
