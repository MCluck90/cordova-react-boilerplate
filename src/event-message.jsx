import styles from './css/index.css';

const EventMessage = ({ isReady }) => {
  if (isReady) {
    return (
      <p className={`${styles.eventReceived} center-align white-text`}>Device is Ready</p>
    );
  } 
  return (
    <p className={`${styles.eventListening} center-align white-text`}>Connecting to Device</p>
  );
};

export default EventMessage;