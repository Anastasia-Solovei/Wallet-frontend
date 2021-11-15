import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { sessionOperations } from './redux/session';

import LogInPage from './pages/LogInPage/LogInPage';
import RegistrationPage from './pages/registrationPage/RegistrationPage';
// import DashboardPage from './pages/DashboardPage';
import Chart from './components/Chart/Chart';
import ProtectedRoute from './components/ProtectedRoute';
import path from './routes_path';

import ButtonAddTransactions from './components/ButtonAddTransactions';
import DiagramTab from './components/DiagramTab';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <Route path={path.registrationPage}>
          <RegistrationPage />
        </Route>

        <Route path={path.logInPage}>
          <LogInPage />
        </Route>

        <ProtectedRoute
          path={path.dashbordPage}
          exact
          redirectTo={path.logInPage}
        >
          <Chart />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
