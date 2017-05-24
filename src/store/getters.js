const getters = {
  token: state => state.user.token,
  // avatar: state => state.user.avatar, 
  name: state => state.user.name,
  uid: state => state.user.uid,
  email: state => state.user.email,
};

export default getters;
