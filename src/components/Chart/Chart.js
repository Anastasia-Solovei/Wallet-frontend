import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import StatsBalance from '../StatsBalance';
import styles from './Chart.module.css';
import { expensesСategoryColors, expenses } from '../../assets/constants';

const data = {
  datasets: [
    {
      data: expenses,
      backgroundColor: expensesСategoryColors,
      borderWidth: 0,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className={styles.doughnut}>
      <div className={styles.balance}>
        ₴<StatsBalance />
      </div>
      <Doughnut data={data} />
    </div>
  </>
);

export default DoughnutChart;
