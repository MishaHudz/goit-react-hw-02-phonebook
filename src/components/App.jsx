import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addUser = data => {
    if (this.state.contacts.find(contact => data.name === contact.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...data, id: nanoid() }],
      };
    });
  };

  deleteUser = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  renderedData = () => {
    const { filter, contacts } = this.state;
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(`${filter.toLowerCase()}`)
      );
    }

    return contacts;
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />

        <ContactList
          renderedData={this.renderedData}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}
