import { FC } from 'react';
import styled from 'styled-components';
import { StatusType } from '../../../types';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';

interface PostsCardProps {
  posts: StatusType;
}

const PostsCard: FC<PostsCardProps> = ({ posts }) => {
  return (
    <Container>
      <Status>{posts.status}</Status>
      <p>{getCurrentTimeStamp(posts.timestamp)}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 120px;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  border-radius: 8px;
  display: flex;
  padding: 20px;
  flex-direction: column;
`;

const Status = styled.p`
  text-align: left;
  margin: 10px 0 0 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
    sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
`;

export default PostsCard;
