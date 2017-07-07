import styles from './css/index.css';

const EventMessage = ({ isReady }) => {
  if (isReady) {
    return (
      <p className={styles.eventReceived}>Device is Ready</p>
    );
  } 
  return (
    <p className={styles.eventListening}>Connecting to Device</p>
  );
};

export default EventMessage;