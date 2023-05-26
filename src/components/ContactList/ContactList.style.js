import styled from 'styled-components';

export const ContactsListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ContactItem = styled.li`
  padding: 10px 15px;
  border-radius: 25px;
  border: 2px solid #fd9222;
  color: white;
  background-color: #1e1823;
`;

export const Delete = styled.button`
  border: 0;
  background-color: #fd9222;
  color: white;
  cursor: pointer;
  border-radius: 25px;
  padding: 5px 10px;
  margin-left: 10px;

  &:hover {
    background-color: #fcf1e0;
    color: #fd9222;
  }
`;
