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

  let totalExpenses;
  if (totalExpensesArray.length) {
    totalExpenses = totalExpensesArray.reduce(function (a, b) {
      return a + b;
    });
  }
  const balance = totalIncomes - totalExpenses;
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <p className={styles.title}>Statistics</p>

        <Chart expenses={totalExpensesArray} balance={balance} />
      </div>
      <div className={styles.table}>
        <InputDate />

        {totalExpensesArray.length && (
          <Table
            expenses={totalExpensesArray}
            totalIncomes={totalIncomes}
            totalExpenses={totalExpenses}
          />
        )}
      </div>
    </div>
  );
};
export default DiagramTab;
