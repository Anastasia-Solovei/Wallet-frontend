import React from 'react';
import Chart from '../Chart';
import Table from '../Table';
import InputDate from '../InputDate';
import styles from './DiagramTab.module.css';
import DatePicker from '../DatePicker';

const DiagramTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <p className={styles.title}>Statistics</p>
        <DatePicker />
        <Chart />
      </div>
      <div className={styles.table}>
        <InputDate />
        <Table />
      </div>
    </div>
  );
};
export default DiagramTab;
