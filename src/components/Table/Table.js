import React from 'react';

import { expensesСategoryColors } from '../../assets/constants';

import styles from './Table.module.css';

const Table = ({
  expenses,
  totalIncomes,
  totalExpenses,
  expensesСategories,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.titles}>
        <li className={styles.titleItem}>Category</li>
        <li className={styles.titleItem}>Total</li>
      </ul>
      <div>
        {expensesСategories.map((category, i) => {
          return (
            <li className={styles.item} key={i}>
              <div
                className={styles.colorCategory}
                style={{ backgroundColor: `${expensesСategoryColors[i]}` }}
              ></div>
              {category}
              <div className={styles.expenses}>{expenses[i].toFixed(2)}</div>
            </li>
          );
        })}
      </div>
      <div className={styles.total}>
        Expenses
        <span className={styles.totalExpenses}>{totalExpenses.toFixed(2)}</span>
      </div>
      <div className={styles.total}>
        Income
        <span className={styles.totalIncomes}>{totalIncomes.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Table;
