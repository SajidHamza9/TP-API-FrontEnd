import React, { useEffect, useState } from 'react';
import { Container, Title, Content, Date, BackBtn } from './styles';

const NewsDetails = ({ match }) => {
  console.log(match);
  const loadNews = async () => {
    const result = await fetch(
      `http://localhost:8080/news/${match.params.newsId}`,
    );
    const data = await result.json();
    setNewsState(data);
  };

  const [newsState, setNewsState] = useState({ date: '' });

  useEffect(loadNews, []);
  return (
    <Container>
      <Title>{newsState.title}</Title>
      <Content>{newsState.content}</Content>
      <BackBtn to='/'>
        <span>&#8617;</span>
      </BackBtn>
      <Date>{newsState.date.split('T')[0]}</Date>
    </Container>
  );
};

export default NewsDetails;
