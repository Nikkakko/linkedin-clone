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
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

type NavItem = {
  path: string;
  name: string;
  icon: JSX.Element;
};

interface TopbarProps {}

const navLinks: NavItem[] = [
  { path: '/home', name: 'Home', icon: <AiOutlineHome /> },
  { path: '/mynetwork', name: 'My Network', icon: <AiOutlineUserSwitch /> },
  { path: '/jobs', name: 'Jobs', icon: <BsBriefcase /> },
  { path: '/messages', name: 'Messages', icon: <AiOutlineMessage /> },
  { path: '/notifications', name: 'Notifications', icon: <AiOutlineBell /> },
];

const Topbar: FC<TopbarProps> = ({}) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {};
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
          {navLinks.map((link: NavItem) => (
            <StyledNavLink to={link.path} key={link.path}>
              {link.icon}
            </StyledNavLink>
          ))}
        </Icons>

        <ProfileUser onClick={() => navigate('/profile')} />
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

const StyledNavLink = styled(NavLink)`
  color: #5e5e5e;

  &:hover {
    color: #020e1b;
  }

  &.active {
    color: #020e1b;
  }
`;

const ProfileUser = styled(BiUserCircle)`
  cursor: pointer;
  margin-left: auto;

  color: #5e5e5e;

  &:hover {
    color: #020e1b;
  }
`;
export default Topbar;
