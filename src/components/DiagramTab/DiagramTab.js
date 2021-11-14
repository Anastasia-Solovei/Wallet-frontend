import React from 'react';
import Chart from '../Chart';
import Table from '../Table';
// import InputDate from '../InputDate';
import styles from './DiagramTab.module.css';

const DiagramTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <p className={styles.title}>Statistics</p>
        <Chart />
      </div>
      <div className={styles.table}>
        {/* <InputDate /> */}
        <Table />
      </div>
    </div>
  );
};
export default DiagramTab;
