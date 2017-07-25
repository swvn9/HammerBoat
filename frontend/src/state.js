import EventEmitter from 'eventemitter3';

import {getCurrentUser} from './user';

const VIEWS = {
  DASHBOARD: "DASHBOARD",
  GUILD_OVERVIEW: "GUILD_OVERVIEW",
  GUILD_CONFIG_EDIT: "GUILD_CONFIG_EDIT",
}

class State {
  constructor() {
    this.events = new EventEmitter();
    this.user = null;
    this.view = VIEWS.DASHBOARD;
    this.viewData = {};
  }

  init() {
    getCurrentUser().then((user) => {
      this.setUser(user);
    }).catch((err) => {
      this.setUser(null);
    });
  }

  setUser(user) {
    this.user = user;
    this.events.emit('user.set', user);
  }

  setView(view, viewData) {
    this.view = view;
    this.viewData = viewData || this.viewData;
    this.events.emit('view.set', this.view, this.viewData);
  }
};

var state = new State;
export {state, VIEWS};
