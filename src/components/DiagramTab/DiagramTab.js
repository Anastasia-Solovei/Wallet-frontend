import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../redux/categories/categoriesOperations';
// import { getTransactionsByCategories } from '../../redux/transactions/transactionsSelectors';
import Chart from '../Chart';
import Table from '../Table';
import InputDate from '../InputDate';
import styles from './DiagramTab.module.css';

const DiagramTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const transactionsByCategories = useSelector(
    state => state.transactions.categories,
  );
  const expensesСategories = useSelector(state => state.categories.all);
  const totalExpensesArray = Object.values(transactionsByCategories);
  const totalIncomes = totalExpensesArray.pop() / 9;

  let totalExpenses;
  if (totalExpensesArray.length) {
    totalExpenses = totalExpensesArray.reduce(function (a, b) {
      return a + b;
    });
  }
  const balance = totalExpenses;
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
            expensesСategories={expensesСategories}
          />
        )}
      </div>
    </div>
  );
};
export default DiagramTab;
