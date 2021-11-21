import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import StatsBalance from '../StatsBalance';
import styles from './Chart.module.css';
import { expensesСategoryColors } from '../../assets/constants';

const Chart = ({ expenses }) => {
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
          ₴<StatsBalance />
        </div>
        <Doughnut data={data} />
      </div>
    </>
  );
};
export default Chart;
