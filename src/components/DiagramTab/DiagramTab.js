import React from 'react';
import { useSelector } from 'react-redux';
// import { getTransactionsByCategories } from '../../redux/transactions/transactionsSelectors';
import Chart from '../Chart';
import Table from '../Table';
import InputDate from '../InputDate';
import styles from './DiagramTab.module.css';

const DiagramTab = () => {
  const transactionsByCategories = useSelector(
    state => state.transactions.categories,
  );
  const totalExpensesArray = Object.values(transactionsByCategories);
  const totalIncomes = totalExpensesArray.pop();
  console.log(totalExpensesArray, totalIncomes);
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <p className={styles.title}>Statistics</p>

        <Chart expenses={totalExpensesArray} />
      </div>
      <div className={styles.table}>
        <InputDate />
        <Table expenses={totalExpensesArray} totalIncomes={totalIncomes} />
      </div>
    </div>
  );
};
export default DiagramTab;
