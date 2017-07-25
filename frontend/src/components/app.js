import { h, Component } from 'preact';

import {state, VIEWS} from '../state';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Login from './login';
import GuildOverview from './guild_overview';
import GuildConfigEdit from './guild_config_edit';

class Empty extends Component {
  render() {
    return <h1>Loading...</h1>;
  }
}

class AppWrapper extends Component {
  render(props, state) {
    return (
      <div id="wrapper">
        <Topbar />
        <div id="page-wrapper">
          {props.view}
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      ready: false,
      view: null,
    }

    state.events.on('user.set', (user) => {
      this.setState({
        ready: true,
        user: user,
      });
    });

    state.events.on('view.set', (view) => {
      this.setState({
        view: view,
      });
    });

    state.init();
  }

  render() {
    if (this.state.ready) {
      if (this.state.user) {
        switch (this.state.view) {
          case VIEWS.GUILD_OVERVIEW:
            return <AppWrapper view={<GuildOverview guild={state.viewData.guild}/>} />;
          case VIEWS.GUILD_CONFIG_EDIT:
            return <AppWrapper view={<GuildConfigEdit guild={state.viewData.guild} />} />;
          default:
            return <AppWrapper view={<Dashboard />} />;
        }
      }
      return <Login />;
    }

    return <Empty />;
  }
}
