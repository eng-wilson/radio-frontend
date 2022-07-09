import React, { useState } from 'react';

import { useNickname } from '../../hooks/useNickname';

import {
  StyledModal,
  Container,
  Title,
  Input,
  Button,
  Dialog,
  Icon,
} from './styles';

interface ModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ modalIsOpen, closeModal }: ModalProps) => {
  const { setNickname } = useNickname();
  const [error, setError] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleSetNickname = () => {
    if (textInput !== '') {
      setError(false);
      setNickname(textInput);
      closeModal();
    } else {
      setError(true);
    }
  };

  return modalIsOpen ? (
    <Dialog>
      <Container>
        <Icon onClick={() => closeModal()} />
        <Title>How do you want to be called?</Title>

        <Input
          value={textInput}
          placeholder='Type here'
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          error={error}
        />

        <Button onClick={handleSetNickname}>Let's go</Button>
      </Container>

      <StyledModal onClick={() => closeModal()} />
    </Dialog>
  ) : null;
};

export default Modal;
