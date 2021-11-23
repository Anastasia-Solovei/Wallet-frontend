import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { useSelector } from 'react-redux';
import styles from './Balance.module.css';

const Balance = () => {
  const [Loaded, setLoaded] = useState();
  useEffect(() => {
    setLoaded(true);
  }, []);
  //   const totalBalance = useSelector(state => state.finance.totalBalance);
  const totalBalance = 24000;
  return (
    <CSSTransition
      in={Loaded}
      timeout={500}
      classNames={{
        enterActive: `${styles.balanceShow}`,
      }}
      mountOnEnter
    >
      <div className={styles.balance}>
        <h3 className={styles.title}>your balance</h3>
        <p className={styles.totalBalance}> ₴ {totalBalance.toFixed(2)}</p>
      </div>
    </CSSTransition>
  );
};
export default Balance;
