import React, { useContext } from 'react';
import News from './News';
import { Container } from './styles';
import { NewsContext } from '../../Context/NewsContext';

const ListNews = ({ listNews, setList, openModal }) => {
  const [news, setNews] = useContext(NewsContext);

  return (
    <Container>
      {listNews.map((news) => {
        return (
          <News
            setNews={setNews}
            openModal={openModal}
            setList={setList}
            key={news.id}
            id={news.id}
            title={news.title}
            content={news.content}
            date={news.date}
          />
        );
      })}
    </Container>
  );
};

export default ListNews;
