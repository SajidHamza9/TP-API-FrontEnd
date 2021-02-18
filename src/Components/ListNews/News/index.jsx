import React, { useContext } from 'react';
import {
  Card,
  CardButtons,
  DeleteBtn,
  EditBtn,
  CardHeader,
  CardTitle,
  CardDate,
  CardContent,
} from './styles';

const News = ({ title, content, date, id, setList, openModal, setNews }) => {
  const deleteNews = async () => {
    await fetch(`http://localhost:8080/news/${id}`, { method: 'DELETE' });
    setList((oldList) => oldList.filter((news) => news.id !== id));
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle to={`/news/${id}`}>
            {title.substring(0, 30).concat('...')}
          </CardTitle>
          <CardDate>{date.split('T')[0]}</CardDate>
        </CardHeader>
        <CardContent>
          {content.length > 60
            ? content.substring(0, 60).concat('...')
            : content}
        </CardContent>
        <CardButtons>
          <EditBtn
            onClick={() => {
              const news = { id: id, title: title, content: content };
              setNews((old) => news);
              openModal();
            }}>
            Edit
          </EditBtn>
          <DeleteBtn onClick={deleteNews}>Delete</DeleteBtn>
        </CardButtons>
      </Card>
    </>
  );
};

export default News;
