import { FC, useState } from 'react';
import styled from 'styled-components';
import { StatusType } from '../../../types';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import { useNavigate } from 'react-router-dom';

interface PostsCardProps {
  posts: StatusType;
  id?: string;
}

const PostsCard: FC<PostsCardProps> = ({ posts, id }) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const navigate = useNavigate();

  const profileNavigate = () => {
    navigate(`/profile/${posts.uid}`);
  };

  return (
    <Container>
      <Username onClick={profileNavigate}>{posts.username}</Username>
      <TimeStamp>{getCurrentTimeStamp(posts.timestamp)}</TimeStamp>
      <Status>{posts.status}</Status>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 20px;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Status = styled.p`
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
    sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
`;

const TimeStamp = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  /* margin-top: 16px; */
`;

const Username = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  text-transform: Capitalize;

  cursor: pointer;

  &:hover {
    text-decoration: underline;

    color: #0a66c2;
  }
`;

export default PostsCard;
