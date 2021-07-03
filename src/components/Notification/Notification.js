import styles from './Notification.module.css';

const Notification = () => (
  <div className={styles.thumb}>
    <p className={styles.message}>This contact is already in contacts</p>
  </div>
);

export default Notification;
