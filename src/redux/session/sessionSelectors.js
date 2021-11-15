const getIsAuth = state => state.session.isAuth;

const getUsername = state => state.session.user.name;

const getUserEmail = state => state.session.user.email;

const sessionSelectors = {
  getIsAuth,
  getUsername,
  getUserEmail,
};
export default sessionSelectors;
