import PropTypes from 'prop-types';

import { ContactsListStyle, ContactItem, Delete } from './ContactList.style';

export function ContactList({ contacts, deleteUser }) {
  return (
    <>
      <ContactsListStyle>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name} <span>{contact.number} </span>
            <Delete
              onClick={() => {
                deleteUser(contact.id);
              }}
            >
              Delete
            </Delete>
          </ContactItem>
        ))}
      </ContactsListStyle>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
