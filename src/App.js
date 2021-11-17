import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { sessionOperations } from './redux/session';
import ProtectedRoute from './components/ProtectedRoute';
import path from './routes_path';

import LogInPage from './pages/LogInPage/LogInPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
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
          path={path.dashboardPage}
          exact
          redirectTo={path.logInPage}
        >
          <DashboardPage />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
