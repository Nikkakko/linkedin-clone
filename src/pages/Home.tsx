import { FC, useContext, useEffect, useState } from 'react';
import HomeComponent from '../components/HomeComponent';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Loader from '../components/common/Loader';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  let navigate = useNavigate();
  const user = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user]);

  return <HomeComponent />;
};

export default Home;
