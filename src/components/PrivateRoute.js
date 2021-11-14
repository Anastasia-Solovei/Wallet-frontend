import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as authSelectors from '../redux/auth/authSelectors';
import path from '../routes_path';

export default function PrivateRoute({
  children,
  redirectTo = path.logInPage,
  ...routeProps
}) {
  const isAuth = useSelector(authSelectors.getIsAuth);
  console.log(isAuth);
  return (
    <Route {...routeProps}>
      {isAuth ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
