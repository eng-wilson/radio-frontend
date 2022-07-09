import styled from 'styled-components';

export const StyledModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #121212;
  opacity: 0.75;
`;

export const Container = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;

  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 400px;

  background: #050505;
  opacity: 1;

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

export const Input = styled.input`
  height: 50px;
  width: 100%;
  max-width: 400px;

  margin-top: 50px;
  padding: 0px 16px;

  border-radius: 5px;

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

  background: #5b99ff;

  color: #fff;
  font-weight: 600;
  font-size: 18px;
  text-align: center;

  cursor: pointer;
`;
