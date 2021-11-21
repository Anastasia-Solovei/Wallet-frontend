import React from 'react';
// import { useSelector } from 'react-redux';
import styles from './Balance.module.css';

const Balance = () => {
  //   const totalBalance = useSelector(state => state.finance.totalBalance);
  const totalBalance = 24000;
  return (
    <div className={styles.balance}>
      <h3 className={styles.title}>your balance</h3>
      <p className={styles.totalBalance}> ₴ {totalBalance.toFixed(2)}</p>
    </div>
  );
};
export default Balance;
