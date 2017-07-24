import { h, Component } from 'preact';
import Topbar from './topbar';
import Dashboard from './dashboard';

const VIEWS = {
  VIEW_DASHBOARD: "VIEW_DASHBOARD"
}

export default class App extends Component {
  constructor() {
    super();

    this.view = VIEWS.VIEW_DASHBOARD;
  }

  getView() {
    switch (this.view) {
      case VIEWS.VIEW_DASHBOARD:
        return <Dashboard />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div id="wrapper">
        <Topbar />
        <div id="page-wrapper">
          {this.getView()}
        </div>
      </div>
    );
  }
}
