import React, { useState } from 'react';
import Chart from '../../components/Chart';
import { Switch, Route } from 'react-router-dom';
import path from '../../routes_path';

import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import Navigation from '../../components/Navigation/Navigation';
import MobileNavigation from '../../components/MobileNavigation/MobileNavigation';
import CurrencyTable from '../../components/Currency';
import DiagramTab from '../../components/DiagramTab';
import HomeTab from '../../components/HomeTab/HomeTab';
import ButtonAddTransactions from '../../components/ButtonAddTransactions';
import ModalAddTransaction from '../../components/ModalAddTransaction';
import s from './DashboardPage.module.css';

const Dashboard = () => {
  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  const toggleModal = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  return (
    <>
      <Header />
      <Container>
        <Navigation />
        <MobileNavigation />
        <CurrencyTable />
      </Container>

      <Switch>
        <Container>
          <Route path={path.dashboardPage}>
            <HomeTab />
          </Route>

          <Route path={path.statistic}>
            <DiagramTab />
          </Route>
        </Container>
      </Switch>
      <ButtonAddTransactions onClick={toggleModal} />
      {isModalAddTransactionOpen && (
        <ModalAddTransaction onClose={toggleModal} />
      )}
    </>
  );
};

export default Dashboard;
