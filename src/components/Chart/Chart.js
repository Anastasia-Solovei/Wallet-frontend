import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Balance from '../Balance/Balance';
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
        ₴<Balance />
      </div>
      <Doughnut data={data} />
    </div>
  </>
);

export default DoughnutChart;
