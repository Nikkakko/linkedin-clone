import { FC, useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../context/UserContext';
import { GrUser } from 'react-icons/gr';
import { MdOutlineEdit } from 'react-icons/md';
import ProfileEdit from '../ProfileEdit';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PostsCard from '../PostsCard';
import { getSingleStatus, getSingleUser } from '../../../api/FirestoreAPI';

interface ProfileCardProps {}

const ProfileCard: FC<ProfileCardProps> = ({}) => {
  const {
    currentUser,
    allStatuses,
    setCurrentUser,
    currentProfile,
    setAllStatuses,
    setCurrentProfile,
  } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id === currentUser?.uid) {
      setCurrentProfile(null);
    } else {
      getSingleUser(setCurrentProfile, id as string);
    }
  }, [id]);

  console.log(currentProfile);

  return (
    <>
      <CardContainer>
        {currentProfile ? (
          currentProfile.photoURL !== null ? (
            <Avatar src={currentProfile?.photoURL} />
          ) : (
            <GrUser size={100} />
          )
        ) : currentUser?.photoURL !== null ? (
          <Avatar src={currentUser?.photoURL} />
        ) : (
          <GrUser size={100} />
        )}

        <UserInfo>
          <div>
            <UserName>
              {currentProfile
                ? currentProfile?.username
                : currentUser?.username}
            </UserName>
            <UserHeading>
              {currentProfile
                ? currentProfile?.headline
                : currentUser?.headline}
            </UserHeading>
            <UserLocation>
              {currentProfile
                ? currentProfile?.location
                : currentUser?.location}
            </UserLocation>
          </div>

          <RightInfo>
            <UserCompany>
              {currentProfile ? currentProfile?.company : currentUser?.company}
            </UserCompany>
            <UserCollage>
              {currentProfile ? currentProfile?.college : currentUser?.college}
            </UserCollage>
          </RightInfo>
        </UserInfo>

        {/* disable if currentProfile length is more than 0  */}

        {currentProfile ? null : (
          <Edit onClick={() => setIsEditing(!isEditing)}>
            <MdOutlineEdit />
          </Edit>
        )}

        {isEditing && <ProfileEdit onClose={() => setIsEditing(false)} />}
      </CardContainer>

      <AllPosts>
        {allStatuses.length === 0 && <p>No posts yet</p>}
        {allStatuses.map(
          (posts, index) =>
            posts.uid === id && <PostsCard key={index} posts={posts} />
        )}
      </AllPosts>
    </>
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

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
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

const UserHeading = styled.h4`
  /* margin-top: 10px; */
  font-family: system-ui;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  width: 320px;
  line-height: 20px;
`;

const UserCompany = styled.p``;

const UserCollage = styled.p``;

const UserLocation = styled.p``;

const RightInfo = styled.div`
  p {
    font-family: system-ui;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }
`;

const AllPosts = styled.div`
  margin: 32px auto;
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;
`;
export default ProfileCard;
