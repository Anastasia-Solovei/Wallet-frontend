import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Picture from './Picture/Picture';
import styles from './Chart.module.css';
import { expensesСategoryColors } from '../../assets/constants';
import StatsBalance from '../StatsBalance';

const Chart = ({ expenses, balance }) => {
  const data = {
    datasets: [
      {
        data: expenses,
        backgroundColor: expensesСategoryColors,
        borderWidth: 0,
      },
    ],
  };
  return (
    <>
      <div className={styles.doughnut}>
        {balance ? (
          <div className={styles.balance}>
            ₴ <StatsBalance balance={balance} />
          </div>
        ) : (
          <div>
            <Picture />
          </div>
        )}
        <Doughnut data={data} />
      </div>
    </>
  );
};
export default Chart;
