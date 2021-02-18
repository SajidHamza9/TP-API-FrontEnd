import React from 'react';
import { Background, Wrapper, Close } from './styles';

const Modal = ({ openModal, showModal, children }) => {
  return (
    <Background showModal={showModal}>
      <Wrapper>
        <Close onClick={openModal}>x</Close>
        {children}
      </Wrapper>
    </Background>
  );
};

export default Modal;
