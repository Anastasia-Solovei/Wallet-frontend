import React from 'react';
import Chart from '../Chart';
import Table from '../Table';
import styles from './DiagramTab.module.css';

const DiagramTab = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <Chart />
      </div>
      <div className={styles.table}>
        <Table />
      </div>
    </div>
  );
};
export default DiagramTab;
