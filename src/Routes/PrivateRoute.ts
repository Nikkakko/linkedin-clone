import { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
  }

  return children;
};
