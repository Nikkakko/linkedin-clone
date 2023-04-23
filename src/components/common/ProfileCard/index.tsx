import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';
import { GrUser } from 'react-icons/gr';
import { MdOutlineEdit } from 'react-icons/md';
import ProfileEdit from '../ProfileEdit';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = ({}) => {
  const { user, currentUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <CardContainer>
      {currentUser?.photoURL ? (
        <Avatar src={currentUser?.photoURL} alt='user' />
      ) : (
        <GrUser size={100} />
      )}
      <UserName>{currentUser?.username}</UserName>
      <UserEmail>{currentUser?.email}</UserEmail>
      <p>{currentUser?.location}</p>
      <p>{currentUser?.company}</p>
      <Edit onClick={() => setIsEditing(!isEditing)}>
        <MdOutlineEdit />
      </Edit>

      {isEditing && <ProfileEdit onClose={() => setIsEditing(false)} />}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: auto;
  height: auto;
  background-color: whitesmoke;
  margin: 30px;
  border-radius: 5px;
  padding: 20px;
  position: relative;
`;

const UserName = styled.h3`
  font-family: system-ui;
  color: rgba(0, 0, 0, 0.9);
  font-size: 24px;
  font-weight: 600;
`;

const UserEmail = styled.p`
  font-family: system-ui;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-weight: 400;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5%;
`;

const Edit = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transform: scale(1.1);
  }

  svg {
    color: rgba(0, 0, 0, 0.7);
    transition: all 0.2s ease-in-out;
    font-size: 24px;
  }
`;

export default ProfileCard;
