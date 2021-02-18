import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  width: 70%;
  min-height: 200px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 2px solid #ff7f56;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid #ccc;
  margin-bottom: 0.5rem;
`;

export const CardTitle = styled(Link)`
  color: rgba(0, 0, 0, 0.42);
  font-size: 2.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ff7f56;
    text-decoration: underline;
  }
`;

export const CardContent = styled.p`
  color: #000;
  font-size: 2rem;
  padding: 1rem 2rem;
`;

export const CardDate = styled.h3`
  color: rgba(0, 0, 0, 0.42);
  font-size: 1.7rem;
  font-weight: bold;
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
`;

export const StyledButton = styled.button`
  border: none;
  color: #fff;
  border-radius: 15px;
  text-align: center;
  padding: 1.2rem 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  width: 8rem;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const DeleteBtn = styled(StyledButton)`
  background-color: #ff7f56;
  &:hover {
    background-color: #fff;
    border: 1px solid #ff7f56;
    color: #ff7f56;
  }
`;

export const EditBtn = styled(StyledButton)`
  background-color: #fff;
  border: 1px solid #ff7f56;
  color: #ff7f56;
  &:hover {
    background-color: #ff7f56;
    color: #fff;
  }
`;
