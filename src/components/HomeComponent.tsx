import { FC } from 'react';
import styled from 'styled-components';

interface HomeComponentProps {}

const HomeComponent: FC<HomeComponentProps> = ({}) => {
  return <Container>HomeComponent</Container>;
};

const Container = styled.div`
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
`;

export default HomeComponent;
