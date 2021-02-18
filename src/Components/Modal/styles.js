import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  opacity: ${({ showModal }) => (showModal ? 1 : 0)};
  transform: ${({ showModal }) =>
    showModal ? `translateY(0);` : `translateY(-100%);`};
`;
export const Wrapper = styled.div`
  width: 60%;
  height: 90%;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.4);
  background-color: #fff;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  padding: 3rem;
`;

export const Close = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 2.5rem;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background-color: #ff7f56;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  outline: none;
`;
