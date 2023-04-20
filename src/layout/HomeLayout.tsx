import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Topbar from '../components/common/Topbar';

interface HomeLayoutProps {}

const HomeLayout: FC<HomeLayoutProps> = ({}) => {
  return (
    <Container>
      <Topbar />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* max-width: 1128px; */
  /* margin: 0 auto; */
  background-color: rgba(224, 224, 224);
`;

export default HomeLayout;
