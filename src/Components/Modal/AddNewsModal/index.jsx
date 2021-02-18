import React, { useState } from 'react';
import Modal from '..';
import {
  TitleField,
  Label,
  ContentField,
  Wrraper,
  AddteBtn,
  CancelBtn,
  CardButtons,
} from './styles';

const AddNewsModal = ({ showModal, openModal, setOffset, loadNews }) => {
  const [titleState, setTitleState] = useState('');
  const [ContentState, setContentState] = useState('');

  const titleChangedHandler = (e) => {
    setTitleState(e.target.value);
  };
  const contentChangedHandler = (e) => {
    setContentState(e.target.value);
  };

  const addNews = async () => {
    await fetch('http://localhost:8080/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleState,
        content: ContentState,
      }),
    });
    setOffset(0);
    loadNews();
    setContentState('');
    setTitleState('');
    openModal();
    console.log('ADD');
  };

  return (
    <Modal showModal={showModal} openModal={openModal}>
      <Wrraper>
        <Label>Tilte:</Label>
        <TitleField
          value={titleState}
          onChange={(e) => titleChangedHandler(e)}
        />
      </Wrraper>
      <Wrraper style={{ height: '70%' }}>
        <Label>Content:</Label>
        <ContentField
          value={ContentState}
          onChange={(e) => contentChangedHandler(e)}
        />
      </Wrraper>
      <CardButtons>
        <CancelBtn
          onClick={() => {
            setContentState('');
            setTitleState('');
            openModal();
          }}>
          Cancel
        </CancelBtn>
        <AddteBtn onClick={addNews}>Add</AddteBtn>
      </CardButtons>
    </Modal>
  );
};

export default AddNewsModal;
