import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 350px;
  min-width: 350px;

  padding: 0px 8px;

  background: #18181b;
`;

export const HistoryContainer = styled.ul`
  height: 80%;
  width: 100%;

  margin: 0px;
  padding: 16px;

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
  color: ${({ color }) => color || '#fff'};
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

export const Input = styled.textarea`
  resize: none;

  background: #4c4c4f;
  color: #fff;

  padding: 10px 8px;
  margin-bottom: 8px;

  min-height: 40px;
  width: 100%;

  border: none;
  border-radius: 5px;

  &::placeholder {
    color: #bababa;
  }
`;

export const Submit = styled.button`
  background: ${({ theme }) => theme.colors.purple600};
  color: #fff;
  font-weight: bold;

  width: 50px;
  height: 40px;
  border-radius: 5px;

  border: none;

  display: block;
  margin-left: auto;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  transition: 0.2s;

  :hover {
    background: ${({ disabled, theme }) => !disabled && theme.colors.purple800};
  }
`;
export const ActionButton = styled.button`
  background: ${({ theme }) => theme.colors.purple600};
  color: #fff;
  font-weight: bold;

  width: 100%;
  height: 40px;
  border-radius: 5px;

  margin-top: 40px;

  border: none;

  display: block;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  transition: 0.2s;

  :hover {
    background: ${({ disabled, theme }) => !disabled && theme.colors.purple800};
  }
`;
