import styled from 'styled-components';

export const AddBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  font-size: 4rem;
  right: 25px;
  border: none;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.4);
  background-color: #252422;
  color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.74);
  }
`;
