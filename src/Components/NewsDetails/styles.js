import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ff7f56;
  font-weight: bold;
  text-align: center;
`;

export const Content = styled.p`
  font-size: 2rem;
  margin: 3rem;
  line-height: 1.7;
`;

export const Date = styled.span`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  align-self: flex-start;
  margin-left: 3rem;
  background-color: #ff7f56;
  padding: 1rem;
  border-radius: 15px;
`;

export const BackBtn = styled(Link)`
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
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.74);
  }
`;
