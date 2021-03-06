import styled, { css } from 'styled-components';
import { MdOutlineClose } from 'react-icons/md';

interface InputProps {
  error: boolean;
}

interface AnimationProps {
  animate: boolean;
}

export const Dialog = styled.div<AnimationProps>`
  width: 100%;
  height: 100%;

  ${({ animate }) =>
    animate &&
    css`
      ${Container} {
        opacity: 1;
        transform: translate(0, 0);
      }
    `}
`;

export const Icon = styled(MdOutlineClose)`
  color: #fff;
  font-size: 2rem;

  position: absolute;
  right: 16px;
  top: 16px;

  cursor: pointer;

  opacity: 0.75;

  :hover {
    opacity: 1;
  }
`;

export const StyledModal = styled.div<AnimationProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #121212;
  opacity: ${({ animate }) => (animate ? 0.75 : 0)};
  transition: 0.25s ease-in;
`;

export const Container = styled.dialog`
  position: absolute;
  inset: 0;
  margin: auto;

  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 400px;

  background: #050505;

  opacity: 0;
  transform: translateY(500px);

  transition: 0.25s ease-in;

  z-index: 1;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0px 20px;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
`;

export const Input = styled.input<InputProps>`
  height: 50px;
  width: 100%;
  max-width: 400px;

  background: #fafafa;

  margin-top: 50px;
  padding: 0px 16px;

  border-radius: 5px;
  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.red500};
    `}

  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

export const Button = styled.button`
  height: 50px;
  width: 100%;
  max-width: 200px;

  margin-top: 20px;

  border-radius: 5px;

  background: ${({ theme }) => theme.colors.purple600};

  color: #fff;
  font-weight: 600;
  font-size: 18px;
  text-align: center;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  transition: 0.2s;

  :hover {
    background: ${({ disabled, theme }) => !disabled && theme.colors.purple800};
  }
`;
