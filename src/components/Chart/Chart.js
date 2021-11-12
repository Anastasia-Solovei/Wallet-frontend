import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from './Chart.module.css';
import { categories, backgroundColors, expensis } from '../../assets/variables';

console.log(backgroundColors);

const data = {
  labels: categories,
  datasets: [
    {
      data: expensis,
      backgroundColor: backgroundColors,
      borderWidth: 0,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className="header">{/* <div className="links"></div> */}</div>
    <Doughnut data={data} height={270} width={270} />
  </>
);

export default DoughnutChart;
