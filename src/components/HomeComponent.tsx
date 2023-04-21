import { FC, useContext } from 'react';
import styled from 'styled-components';
import PostStatus from './common/PostUpdate';
import { UserContext } from '../context/UserContext';

interface HomeComponentProps {}

const HomeComponent: FC<HomeComponentProps> = ({}) => {
  return (
    <Container>
      <PostStatus />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1128px;
  margin: 24px auto;
`;

export default HomeComponent;
