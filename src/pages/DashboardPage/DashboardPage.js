import React from 'react';
import Chart from '../../components/Chart';
import { Switch, Route } from 'react-router-dom';
import path from '../../routes_path';

import s from './DashboardPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import CurrencyTable from '../../components/Currency';
import DiagramTab from '../../components/DiagramTab';

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Route path={path.dashboardPage}>
          <Navigation />
          <CurrencyTable />
        </Route>

        <Route path={path.statistic}>
          <Navigation />
          <Chart />
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
