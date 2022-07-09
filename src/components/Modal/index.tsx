import React, { useState } from 'react';
import { useNickname } from '../../hooks/useNickname';

import { StyledModal, Container, Title, Input, Button, Dialog } from './styles';

interface ModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

const Modal = ({ modalIsOpen, closeModal }: ModalProps) => {
  const { setNickname } = useNickname();
  const [textInput, setTextInput] = useState('');

  const handleSetNickname = () => {
    if (textInput !== '') {
      setNickname(textInput);
      closeModal();
    }
  };

  return modalIsOpen ? (
    <Dialog>
      <Container>
        <Title>How do you want to be called?</Title>

        <Input
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />

        <Button onClick={handleSetNickname}>Let's go</Button>
      </Container>

      <StyledModal onClick={() => closeModal()} />
    </Dialog>
  ) : null;
};

export default Modal;
