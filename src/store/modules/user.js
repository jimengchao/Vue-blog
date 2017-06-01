import { loginByEmail, logout, isLogin } from '../../api/login'
import Cookies from 'js-cookie'

const user = {
  state: {
    user: '',
    status: '',
    username: '',
    code: '',
    uid: undefined,
    auth_type: '',
    token: Cookies.get('Token'),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type;
    },
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_UID: (state, uid) => {
      state.uid = uid;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = '';
    }
  },

  actions: {

    LoginByEmail({ commit }, userInfo) {

      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {

        loginByEmail(username, userInfo.password).then(response => {
          const data = response.data;
          Cookies.set('Token', data.data.token,{ expires: 1 });
          commit('SET_TOKEN', data.data.token);
          commit('SET_USERNAME', username);
          resolve();

        }).catch(error => {
          reject(error);
        });


      })
    },


    // 获取用户信息
    // GetInfo({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token).then(response => {
    //       const data = response.data;
    //       commit('SET_ROLES', data.role);
    //       resolve(response);
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

    // // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code);
    //     loginByThirdparty(state.status, state.email, state.code, state.auth_type).then(response => {
    //       commit('SET_TOKEN', response.data.token);
    //       Cookies.set('Token', response.data.token);
    //       resolve();
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },


    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '');
          // commit('SET_ROLES', []);
          Cookies.remove('Token');
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },


    // // 前端 登出
    // FedLogOut({ commit }) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', '');
    //     Cookies.remove('Token');
    //     resolve();
    //   });
    // }
    
  }
};

export default user;