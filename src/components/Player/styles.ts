import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  padding: 0px 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  * {
    max-width: 900px;
    width: 100%;

    max-height: 750px;
    height: 50vw;
  }

  @media (max-width: 960px) {
    padding-top: 50px;
    height: 50%;

    * {
      height: 90%;
    }
  }
`;
