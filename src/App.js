import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { fetchCurrentUser } from './redux/session/sessionOperations';
import { getIsLoading } from './redux/global/globalSelectors';
import ProtectedRoute from './components/ProtectedRoute';
import path from './routes_path';
import LoaderSpinner from './components/Loader';

// import LogInPage from './pages/LogInPage/LogInPage';
// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
// import DashboardPage from './pages/DashboardPage/DashboardPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogInPage = lazy(() =>
  import('./pages/LogInPage/LogInPage.js' /* webpackChunkName: "login-page" */),
);
const RegistrationPage = lazy(() =>
  import(
    './pages/RegistrationPage/RegistrationPage.js' /* webpackChunkName: "registration-page" */
  ),
);
const DashboardPage = lazy(() =>
  import(
    './pages/DashboardPage/DashboardPage.js' /* webpackChunkName: "dashboard-page" */
  ),
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  // console.log(isLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* {isLoading && <LoaderSpinner />} */}
      {/* <LoaderSpinner /> */}
      <Suspense fallback={<LoaderSpinner />}>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <Switch>
            <Route exact path="/">
              <Redirect to={path.dashboardPage} />
            </Route>

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
        )}

        <ToastContainer position="top-right" autoClose={4000} closeOnClick />
      </Suspense>
    </>
  );
}

export default App;
