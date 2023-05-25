export function ContactList({ renderedData, deleteUser }) {
  return (
    <>
      <ul>
        {renderedData().map(contact => (
          <li key={contact.id} id={contact.id}>
            {contact.name} <span>{contact.number} </span>
            <button
              onClick={evt => {
                deleteUser(evt.target.closest('li').id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
