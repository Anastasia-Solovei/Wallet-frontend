import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { expensesСategoryColors } from '../../assets/constants';
import StatsBalance from '../StatsBalance';

const Chart = ({ expenses, balance }) => {
  console.log(expenses, balance);
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
        <div className={styles.balance}>
          ₴ <StatsBalance balance={balance} />
        </div>
        <Doughnut data={data} />
      </div>
    </>
  );
};
export default Chart;
