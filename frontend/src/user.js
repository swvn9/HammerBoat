import axios from 'axios';
import state from './state';

class User {
  constructor(obj) {
    this.id = obj.id;
  }

  getGuilds(cb) {
    axios.get('/api/users/@me/guilds')
      .then((res) => {
        cb(res.data);
      });
  }

  logout(cb) {
    axios.post('/api/auth/logout').then((res) => {
      state.setUser(null);
    });
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    axios.get('/api/users/@me').then((res) => {
      resolve(new User(res.data));
    }).catch((err) => {
      reject();
    });
  });
}
