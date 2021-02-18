import React from 'react';
import { Wrraper, Title, SortBtn } from './styles';

const Sort = ({ sort, setOffset }) => {
  return (
    <Wrraper>
      <Title>Sort By Date: </Title>
      <SortBtn
        onClick={() => {
          sort({ field: 'date', order: 'asc' });
          setOffset(0);
        }}>
        &#8593;
      </SortBtn>
      <SortBtn
        onClick={() => {
          sort({ field: 'date', order: 'desc' });
          setOffset(0);
        }}>
        &#8595;
      </SortBtn>
    </Wrraper>
  );
};

export default Sort;
