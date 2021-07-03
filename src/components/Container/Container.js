import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Phonebook</h1>
    {children}
  </div>
);

export default Container;
