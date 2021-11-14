const getIsLoggedIn = state => state.session.IsLoggedIn;

const getUsername = state => state.session.user.name;

const getUserEmail = state => state.session.user.email;

const getLoading = state => state.auth.isLoading;

const sessionSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getLoading,
};
export default sessionSelectors;
