import styled from 'styled-components';

export const FormStyles = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1823;
  color: white;
  gap: 20px;

  padding: 30px;
  border-radius: 30px;

  margin-bottom: 25px;
`;

export const ContactButton = styled.button`
  width: 120px;
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 25px;
  color: white;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #fd9222;
    border-color: #fd9222;
  }
`;

export const Input = styled.input`
  margin-left: 10px;
  border: 1px solid #fd9222;
  border-radius: 25px;
  padding: 5px 15px;
  background-color: transparent;
  color: white;
`;
