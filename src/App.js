import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchCurrentUser } from './redux/session/sessionOperations';
import { getIsLoading } from './redux/global/globalSelectors';
import ProtectedRoute from './components/ProtectedRoute';
import path from './routes_path';
import Loader from './components/Loader';

import LogInPage from './pages/LogInPage/LogInPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  // console.log(isLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <Switch>
        <Route path={path.registrationPage}>
          <RegistrationPage />
        </Route>

        <Route path={path.logInPage}>
          <LogInPage />
        </Route>

        <ProtectedRoute
          path={[path.dashboardPage, path.statistic, path.currency]}
          exact
          redirectTo={path.logInPage}
        >
          <DashboardPage />
        </ProtectedRoute>
      </Switch>
      <ToastContainer position="top-right" autoClose={4000} closeOnClick />
    </>
  );
}

export default App;
