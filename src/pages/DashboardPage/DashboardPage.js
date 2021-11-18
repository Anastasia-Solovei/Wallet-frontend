import React from 'react';
import Chart from '../../components/Chart';
import { Switch, Route } from 'react-router-dom';
import path from '../../routes_path';
import Header from '../../components/Header/Header';
// import Container from '../../components/Container/Container';
import s from './DashboardPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import CurrencyTable from '../../components/Currency';
import DiagramTab from '../../components/DiagramTab';

const Dashboard = () => {
  return (
    <>
      <Switch>
        <Route path={path.dashboardPage}>
          {/* <Container> */}
          <Header />
          <Navigation />
          <CurrencyTable />
          {/* </Container> */}
        </Route>

        <Route path={path.statistic}>
          <Header />
          <Navigation />
          <DiagramTab />
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
