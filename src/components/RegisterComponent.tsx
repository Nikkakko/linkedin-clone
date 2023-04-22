import { FC, useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GoogleLoginAPI, RegisterAPI } from '../api/AuthAPI';
import { toast } from 'react-toastify';
import { postUserData } from '../api/FirestoreAPI';
interface RegisterComponentProps {}

type Credentials = {
  username: string;
  email: string;
  password: string;
};

const RegisterComponent: FC<RegisterComponentProps> = ({}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const register = async () => {
    try {
      let res = await RegisterAPI(
        credentials.email,
        credentials.password,
        credentials.username
      );
      toast.success('Account created successfully');
      navigate('/home');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const googleLogin = async () => {
    try {
      let res = await GoogleLoginAPI();
      toast.success('Signed in successfully');
      navigate('/home');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  return (
    <RegistWrapper>
      <RegistTitle>Make the most of your professional life</RegistTitle>
      <AuthWrapper>
        <Form>
          <Label>Username (required)</Label>
          <Input
            type='username'
            name='username'
            placeholder='Your name'
            onChange={handleOnChange}
            value={credentials.username}
            required
          />
          <Label>Email</Label>
          <Input
            type='email'
            name='email'
            placeholder='Your email'
            onChange={handleOnChange}
            value={credentials.email}
          />
          <Label>Password (6 or more characters)</Label>
          <Input
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='Your password'
            onChange={handleOnChange}
            value={credentials.password}
            autoComplete='off'
            pattern='.{6,}'
          />

          <ShowPassword onClick={() => setShowPassword(!showPassword)}>
            <span>{showPassword ? 'Hide' : 'Show'}</span>
          </ShowPassword>
        </Form>

        <RegisterButton onClick={register}>Agree & Join</RegisterButton>

        <Line data-content='or' />

        <GoogleBtn>
          <GoogleButton
            onClick={googleLogin}
            style={{
              width: '100%',
              borderRadius: '28px',
              padding: '0px 24px',
            }}
            type='light'
          />
        </GoogleBtn>

        <Newmember>
          Already on LinkedIn?
          <Link to='/'>
            <span>Sign in</span>
          </Link>
        </Newmember>
      </AuthWrapper>
    </RegistWrapper>
  );
};

const RegistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RegistTitle = styled.h1`
  font-family: system-ui;
  font-weight: 500;
  font-size: 32px;
  color: rgba(0, 0, 0, 0.9);
`;

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  margin-top: 28px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  // gap but not label
`;

const Label = styled.label`
  font-family: system-ui;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 8px;
`;

const Input = styled.input`
  height: 20px;
  padding: 16px;
  background-color: white;
  outline: none;
  border: 1px solid #212121;
  color: #212121;
  border-radius: 4px;
  font-family: system-ui;
  font-size: 16px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.linkedInBlue1};
  }

  &::placeholder {
    font-family: system-ui;
    font-size: 16px;
  }

  margin-bottom: 8px;
`;

const RegisterButton = styled.button`
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.linkedInBlue1};
  color: #ffffff;
  border: none;
  border-radius: 28px !important;
  align-self: center;
  padding: 12px 24px;
  font-family: system-ui;
  font-size: 16px;
  margin-top: 16px;
  text-transform: capitalize;

  &:hover {
    background-color: #004182;
    transition: 0.2s;
  }
`;

const ShowPassword = styled.div`
  position: absolute;
  right: 20px;
  top: 175px;
  /* padding: 28px; */

  span {
    font-family: system-ui;
    font-size: 14px;
    text-transform: lowercase;
    user-select: none;

    cursor: pointer;
    color: ${({ theme }) => theme.colors.linkedInBlue1};
    &:hover {
      border-radius: 10px;
      background-color: #0a66c267;
      padding: 0px 8px;
      color: white;
      transition: all 0.2s ease-in-out;
    }
  }
`;

const Line = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  &:before {
    content: '';
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #818078;
    background-color: #fcfcfa;
  }
`;

const GoogleBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Newmember = styled.p`
  font-family: system-ui;
  font-size: 14px;
  text-align: center;
  margin-top: 24px;

  span {
    font-family: system-ui;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.linkedInBlue1};
    margin-left: 9px;
    &:hover {
      border-radius: 10px;
      background-color: #0a66c267;
      padding: 4px;
      text-decoration: underline;
    }
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default RegisterComponent;
