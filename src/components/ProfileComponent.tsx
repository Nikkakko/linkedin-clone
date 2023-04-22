import { FC, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import styled from 'styled-components';
import ProfileCard from './common/ProfileCard';

interface ProfileComponentProps {}

const ProfileComponent: FC<ProfileComponentProps> = ({}) => {
  const { user } = useContext(UserContext);
  return <Container>{user && <ProfileCard />}</Container>;
};

const Container = styled.div`
  width: 100%;
  max-width: 1128px;
  margin: 24px auto;
`;
export default ProfileComponent;
