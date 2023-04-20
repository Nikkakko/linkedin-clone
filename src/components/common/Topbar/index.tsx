import { FC } from 'react';
import styled from 'styled-components';
import { LinkedinLogo } from '../../../assets';
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

interface TopbarProps {}

const Topbar: FC<TopbarProps> = ({}) => {
  return (
    <Container>
      <TopbarMain>
        <ImageLogo src={LinkedinLogo} alt='Linkedin Logo' />
        <AiOutlineSearch
          style={{
            marginLeft: '10px',
          }}
        />
        <Icons>
          <AiOutlineHome />
          <AiOutlineUserSwitch />
          <BsBriefcase />
          <AiOutlineMessage />
          <AiOutlineBell />
        </Icons>
        <BiUserCircle
          style={{
            marginLeft: 'auto',
          }}
        />
      </TopbarMain>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.BgColor};
`;

const TopbarMain = styled.div`
  width: 100%;
  max-width: 1128px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  svg {
    font-size: 35px;
    cursor: pointer;
    color: #5e5e5e;

    &:hover {
      color: #020e1b;
    }
  }

  /* padding: 0 24px; */
`;

const ImageLogo = styled.img`
  width: 41px;
  height: 41px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-around;
  width: 55%;
  margin: 0 auto;
`;

export default Topbar;
