import React from 'react';
import { AddBtn } from './styles';

const AddButton = ({ openModal }) => {
  return <AddBtn onClick={openModal}>+</AddBtn>;
};

export default AddButton;
