import { FC } from 'react';
import styled from 'styled-components';
import PostStatus from './common/PostUpdate';

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
