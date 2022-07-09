import React, { useEffect, useState } from 'react';

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
  const [animate, setAnimate] = useState(false);

  const handleSetNickname = () => {
    if (textInput !== '') {
      setError(false);
      setNickname(textInput);
      closeModal();
    } else {
      setError(true);
    }
  };

  const handleClose = () => {
    setAnimate(false);

    setTimeout(() => {
      closeModal();
    }, 250);
  };

  useEffect(() => {
    setTimeout(() => {
      if (modalIsOpen) {
        setAnimate(modalIsOpen);
      }
    }, 0);
  }, [modalIsOpen]);

  return modalIsOpen ? (
    <Dialog animate={animate}>
      <Container>
        <Icon onClick={() => handleClose()} />
        <Title>How do you want to be called?</Title>

        <Input
          value={textInput}
          placeholder='Type here'
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          error={error}
        />

        <Button disabled={!textInput} onClick={handleSetNickname}>
          Let's go
        </Button>
      </Container>

      <StyledModal animate={animate} onClick={() => handleClose()} />
    </Dialog>
  ) : null;
};

export default Modal;
