const getters = {
  token: state => state.user.token,
  // avatar: state => state.user.avatar, 
  username: state => state.user.username,
  uid: state => state.user.uid,
  // email: state => state.user.email,
};

export default getters;
