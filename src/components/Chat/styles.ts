import styled from 'styled-components';

const randomColor = function (colors: any) {
  var keys = Object.keys(colors);
  return colors[keys[(keys.length * Math.random()) << 0]];
};

export const Container = styled.aside`
  height: 100%;
  width: 350px;
  min-width: 350px;

  background: #18181b;
`;

export const HistoryContainer = styled.ul`
  height: 80%;
  width: 100%;

  margin: 0px;
  padding: 8px 16px;

  overflow-y: scroll;
`;

export const ListItem = styled.li`
  width: 100%;
  color: #fff;

  list-style-type: none;

  margin-bottom: 16px;
  word-break: break-word;
`;

export const Nickname = styled.span`
  font-weight: 900;
  color: ${(props) => randomColor(props.theme.colors)};
`;

export const InputContainer = styled.form`
  width: 100%;
  height: 20%;
  padding: 0px 8px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  background: #4c4c4f;
  color: #fff;

  padding: 0px 8px;
  margin-bottom: 8px;

  height: 40px;
  width: 100%;

  border: none;
  border-radius: 5px;

  &::placeholder {
    color: #bababa;
  }
`;

export const Submit = styled.button`
  background: #9147ff;
  color: #fff;
  font-weight: bold;

  width: 50px;
  height: 40px;
  border-radius: 5px;

  border: none;

  display: block;
  margin-left: auto;
`;
