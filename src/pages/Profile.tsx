import { FC, useContext, useEffect } from 'react';
import ProfileComponent from '../components/ProfileComponent';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {}

const Profile: FC<ProfileProps> = ({}) => {
  const { user } = useContext(UserContext);

  let navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate('/home');
  //   }
  // }, [user]);
  return <ProfileComponent />;
};

export default Profile;
