import React from 'react';
import { useBoolean } from '../../hooks';
import styles from './Accordion.module.scss';

const Accordion = () => {
  const [isOpen, actions] = useBoolean(false);

  return (
    <div className={`${styles.acc} ${isOpen && styles.acc_isOpen}`}>
      <button
        onClick={actions.toggle}
      >
        openMe
      </button>

      <div className={styles.acc__content}>
        I am the content
        click
      </div>
    </div>
  );
}

export { Accordion };
