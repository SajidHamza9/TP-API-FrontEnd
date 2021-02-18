import React from 'react';
import { Container, PaginationBtn } from './styles';

const Pagination = ({ next, previous, loadNextPage, loadPreviousPage }) => {
  return (
    <Container>
      <PaginationBtn
        onClick={loadPreviousPage}
        disabled={previous === 0 ? false : !previous}>
        Previous
      </PaginationBtn>
      <PaginationBtn onClick={loadNextPage} disabled={!next}>
        Next
      </PaginationBtn>
    </Container>
  );
};

export default Pagination;
