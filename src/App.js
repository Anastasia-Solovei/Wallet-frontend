import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import * as authOperations from './redux/auth/authOperations';
import LogInPage from './pages/LogInPage/LogInPage';
import RegistrationPage from './pages/Registration';
import DashboardPage from './pages/DashboardPage';
import Chart from './components/Chart/Chart';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import path from './routes_path';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Switch>
        <PublicRoute
          path={path.registrationPage}
          restricted
          redirectTo={path.dashbordPage}
        >
          <RegistrationPage />
        </PublicRoute>
        <PublicRoute
          path={path.logInPage}
          restricted
          redirectTo={path.dashbordPage}
        >
          <LogInPage />
        </PublicRoute>
        <PrivateRoute
          path={path.dashbordPage}
          exact
          redirectTo={path.logInPage}
        >
          <DashboardPage />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
