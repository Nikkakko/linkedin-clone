import { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  return <StyledButton>{title}</StyledButton>;
};

const StyledButton = styled.button``;

export default Button;
