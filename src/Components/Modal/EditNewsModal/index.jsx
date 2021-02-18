import React, { useState, useContext, useEffect } from 'react';
import Modal from '..';
import { NewsContext } from '../../../Context/NewsContext';
import {
  TitleField,
  Label,
  ContentField,
  Wrraper,
  AddteBtn,
  CancelBtn,
  CardButtons,
} from './styles';

const EditNewsModal = ({ showModal, openModal, setOffset, loadNews }) => {
  const [news, setNews] = useContext(NewsContext);
  const [titleState, setTitleState] = useState(news.title);
  const [ContentState, setContentState] = useState(news.content);

  const titleChangedHandler = (e) => {
    setTitleState(e.target.value);
  };
  const contentChangedHandler = (e) => {
    setContentState(e.target.value);
  };

  const updatePost = async () => {
    await fetch(`http://localhost:8080/news/${news.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleState,
        content: ContentState,
      }),
    });
    loadNews();
    openModal();
    console.log('UPDATED');
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
        <AddteBtn onClick={updatePost}>Edit</AddteBtn>
      </CardButtons>
    </Modal>
  );
};

export default EditNewsModal;
