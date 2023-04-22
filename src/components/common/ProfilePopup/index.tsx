import { FC, useContext } from 'react';
import styled from 'styled-components';
import { onLogout } from '../../../api/AuthAPI';
import { UserContext } from '../../../context/UserContext';
import { GrUser } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

interface ProfilePopupProps {}

const ProfilePopup: FC<ProfilePopupProps> = ({}) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Container>
      {!user ? (
        <LogoutBtn onClick={() => navigate('/')}>Sign In</LogoutBtn>
      ) : (
        <>
          <Wrapper>
            <ImageWrapper>
              {user?.photoURL ? (
                <img src={user?.photoURL} alt='user' />
              ) : (
                <GrUser />
              )}
            </ImageWrapper>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',

                gap: '12px',
              }}
            >
              <Name>{user?.displayName}</Name>
              {/* <Headline>{user?.email}</Headline> */}
            </div>
          </Wrapper>
          <ViewProfile
            onClick={() => {
              navigate('/profile');
            }}
          >
            View Profile
          </ViewProfile>
          <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #a8a8a8;
  width: 200px;
  height: auto;
  background-color: whitesmoke;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  position: absolute;
  top: 60px;
  right: 400px;

  transition: all 0.3s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  svg {
    font-size: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Name = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  text-align: left;
  margin-top: -7px;
`;

const Headline = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  margin-top: -15px;

  max-width: 100px;
`;

const ViewProfile = styled.button`
  width: 100%;
  height: 25px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.linkedInBlue};
  color: ${({ theme }) => theme.colors.linkedInBlue};
  font-size: 14px;
  font-weight: 600;

  border-radius: 20px;
  margin-top: 20px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.linkedInBlue};
    color: #fff;
  }
`;

const LogoutBtn = styled(ViewProfile)`
  background-color: ${({ theme }) => theme.colors.linkedInBlue};
  color: #fff;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.linkedInBlue};
  }

  margin-top: 20px;
`;

export default ProfilePopup;
