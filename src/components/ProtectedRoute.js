import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { sessionSelectors } from '../redux/session';
import path from '../routes_path';

export default function ProtectedRoute({
  children,
  redirectTo = path.logInPage,
  ...routeProps
}) {
  const isAuth = useSelector(sessionSelectors.getIsAuth);

  return (
    <Route {...routeProps}>
      {isAuth ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
