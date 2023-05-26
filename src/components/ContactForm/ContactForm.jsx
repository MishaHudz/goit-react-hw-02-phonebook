import { Component } from 'react';
import PropTypes from 'prop-types';

import { FormStyles, ContactButton, Input } from './ContactForm.styles';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmitForm = evt => {
    evt.preventDefault();

    const flag = this.props.addUser(this.state);
    if (flag) this.resetInputs();
  };

  resetInputs = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <FormStyles onSubmit={this.onSubmitForm}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>

        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>
        <ContactButton>Add contact</ContactButton>
      </FormStyles>
    );
  }
}

ContactForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};
