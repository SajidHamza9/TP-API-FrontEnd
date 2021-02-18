import styled from 'styled-components';

export const TitleField = styled.input`
  width: 100%;
  border: none;
  padding: 1rem;
  color: #252422;
  border-radius: 5px;
  background-color: #eee;
  border: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ff7f56;
  }
`;

export const Wrraper = styled.div`
  /* margin-bottom: 3rem;
  height: fit-content; */
`;

export const ContentField = styled.textarea`
  width: 100%;
  padding: 1rem;
  color: #252422;
  border-radius: 5px;
  height: 93%;
  max-height: 100%;
  background-color: #eee;
  border: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ff7f56;
  }
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: bold;
  color: #252422;
  display: block;
  margin-bottom: 1rem;
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled.button`
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
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const AddteBtn = styled(StyledButton)`
  background-color: #ff7f56;
  &:not(:disabled):hover {
    background-color: #fff;
    border: 1px solid #ff7f56;
    color: #ff7f56;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const CancelBtn = styled(StyledButton)`
  background-color: #fff;
  border: 1px solid #ff7f56;
  color: #ff7f56;
  &:hover {
    background-color: #ff7f56;
    color: #fff;
  }
`;
