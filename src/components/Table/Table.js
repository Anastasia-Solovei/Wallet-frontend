import React from 'react';

import { categories, backgroundColors, expenses } from '../../assets/variables';

import styles from './Table.module.css';

const Table = () => {
  const totalExpenses = 54555;
  const totalIncomes = 152000;
  return (
    <div className={styles.container}>
      <ul className={styles.titles}>
        <li className={styles.titleItem}>Category</li>
        <li className={styles.titleItem}>Total</li>
      </ul>
      <div>
        {categories.map((category, i) => {
          return (
            <li className={styles.item} key={i}>
              <div
                className={styles.colorCategory}
                style={{ backgroundColor: `${backgroundColors[i]}` }}
              ></div>
              {category}
              <div className={styles.expenses}>{expenses[i]}</div>
            </li>
          );
        })}
      </div>
      <div className={styles.total}>
        Expenses<span className={styles.totalExpenses}>{totalExpenses}</span>
      </div>
      <div className={styles.total}>
        Income<span className={styles.totalIncomes}>{totalIncomes}</span>
      </div>
    </div>
  );
};

export default Table;
