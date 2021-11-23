import React from 'react';
import picture from '../../../images/Chart/noexpenses.png';
import styles from './Picture.module.css';
const Picture = () => {
  return (
    <div className={styles.container}>
      <img src={picture} alt={'noexpenses'} />
      <div className={styles.picture}>
        You don't have any expenses this month yet
      </div>
    </div>
  );
};
export default Picture;
