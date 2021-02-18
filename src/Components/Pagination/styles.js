import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0rem auto;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const PaginationBtn = styled.button`
  border: none;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  padding: 1.2rem 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  width: 10rem;
  outline: none;
  cursor: pointer;
  background-color: #ff7f56;
  transition: all 0.3s ease-in;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
