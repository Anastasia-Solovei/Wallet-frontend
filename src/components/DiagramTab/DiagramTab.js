import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { getCategories } from '../../redux/categories/categoriesOperations';
// import { getTransactionsByCategories } from '../../redux/transactions/transactionsSelectors';
import Chart from '../Chart';
import Table from '../Table';
import InputDate from '../InputDate';
import styles from './DiagramTab.module.css';

const DiagramTab = () => {
  const [Loaded, setLoaded] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const transactionsByCategories = useSelector(
    state => state.transactions.categories,
  );
  const expensesСategories = useSelector(state => state.categories.all);
  const totalExpensesArray = Object.values(transactionsByCategories);
  const totalIncomes = totalExpensesArray.pop();

  let totalExpenses;
  if (totalExpensesArray.length) {
    totalExpenses = totalExpensesArray.reduce(function (a, b) {
      return a + b;
    });
  }
  const balance = totalExpenses;
  return (
    <CSSTransition
      in={Loaded}
      timeout={500}
      classNames={{
        enterActive: `${styles.diagramTabShow}`,
      }}
      mountOnEnter
    >
      <div className={styles.container}>
        <div className={styles.chart}>
          <p className={styles.title}>Statistics</p>

          <Chart expenses={totalExpensesArray} balance={balance} />
        </div>
        <div className={styles.table}>
          <InputDate />

          <Table
            expenses={totalExpensesArray}
            totalIncomes={totalIncomes}
            totalExpenses={totalExpenses}
            expensesСategories={expensesСategories}
          />
        </div>
      </div>
    </CSSTransition>
  );
};
export default DiagramTab;
