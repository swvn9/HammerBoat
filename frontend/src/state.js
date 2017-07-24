import {getCurrentUser} from './user';

class State {
  constructor() {
    this.user = null;
  }

  withUser(cb) {
    if (!this.user) {
      getCurrentUser().then((user) => {
        this.user = user;
        cb(user);
      });
    } else {
      cb(user);
    }
  }
};

var state = new State;
export default state;
