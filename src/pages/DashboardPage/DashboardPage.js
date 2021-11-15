import React from 'react';
import Chart from '../../components/Chart';

import s from './DashboardPage.module.css';
import CurrencyTable from '../../components/Currency';

const Dashboard = () => {
  return (
    <>
      <CurrencyTable />
      <Chart />
    </>
  );
};

export default Dashboard;
