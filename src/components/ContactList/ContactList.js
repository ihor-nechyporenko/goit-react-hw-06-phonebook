import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <li className={styles.item}>
          <p className={styles.name}>{name}:</p>
          <p>{number}</p>
          <button
            type="button"
            className={styles.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.defaultProps = {
  name: '',
  number: '',
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};

export default ContactList;
