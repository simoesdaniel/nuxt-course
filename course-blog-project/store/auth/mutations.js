export default {
  authenticateUser(state, token) {
    state.token = token;
  },
  invalidateToken(state) {
    state.token = "";
  }
};
