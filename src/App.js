import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Container from './components/Container';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import './common.css';
import fadeStyles from './fade/fadeFilter.module.css';

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  render() {
    const { contacts } = this.props;
    const renderFilter = contacts.length > 0;

    return (
      <Container>
        <Form />

        <CSSTransition
          in={renderFilter}
          timeout={250}
          classNames={fadeStyles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.phonebook.contacts,
});

export default connect(mapStateToProps, null)(App);
