import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

interface RootLAyoutProps {}

const RootLAyout: FC<RootLAyoutProps> = ({}) => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffff;
`;

export default RootLAyout;
