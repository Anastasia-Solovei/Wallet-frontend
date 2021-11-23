import React, { useEffect, useMemo } from 'react';
// import { useSelector } from 'react-redux';
import styles from './Balance.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTransactions } from '../../redux/transactions/transactionsSelectors';
import { fetchTransactions } from '../../redux/transactions/transactionsOperations';

const Balance = () => {
  //   const totalBalance = useSelector(state => state.finance.totalBalance);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const transactions = useSelector(getTransactions);

  const data = useMemo(() => transactions, [transactions]);

  const totalBalance = data.length === 0 ? 0 : data[data.length - 1].balance;
  return (
    <div className={styles.balance}>
      <h3 className={styles.title}>your balance</h3>
      <p className={styles.totalBalance}> ₴ {totalBalance.toFixed(2)}</p>
    </div>
  );
};
export default Balance;
