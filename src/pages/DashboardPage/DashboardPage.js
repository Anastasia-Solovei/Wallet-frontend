import React from 'react';
import Chart from '../../components/Chart';
import { Switch, Route } from 'react-router-dom';
import path from '../../routes_path';

import Header from '../../components/Header/Header';
import HomeTab from '../../components/HomeTab/HomeTab';
import s from './DashboardPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import CurrencyTable from '../../components/Currency';
import DiagramTab from '../../components/DiagramTab';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Navigation />
      <MobileNavigation />
      <CurrencyTable />
      <Switch>
        <Route path={path.dashboardPage}>
          <HomeTab />
        </Route>

        <Route path={path.statistic}>
          <DiagramTab />
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
