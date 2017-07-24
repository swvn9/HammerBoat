import axios from 'axios';

class User {
  constructor(obj) {
    this.id = obj.user_id;
  }

  getGuilds(cb) {
    axios.get('/api/users/@me/guilds')
      .then((res) => {
        cb(res.data);
      });
  }
}

export function getCurrentUser() {
  return axios.get('/api/users/@me')
    .then((res) => {
      return new User(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
