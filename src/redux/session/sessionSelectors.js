const getIsAuth = state => state.session.isAuth;

const getUsername = state => state.session.user.name;

const getUserEmail = state => state.session.user.email;

const getError = state => state.session.error;

const sessionSelectors = {
  getIsAuth,
  getUsername,
  getUserEmail,
  getError,
};
export default sessionSelectors;
