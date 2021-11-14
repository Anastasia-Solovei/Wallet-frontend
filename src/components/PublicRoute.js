import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from '../redux/auth/authSelectors';
import path from '../routes_path';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = path.homePage,
  ...routeProps
}) {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const shouldRedirect = isAuth && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
