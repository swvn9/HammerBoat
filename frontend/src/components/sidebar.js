import { h, render, Component } from 'preact';

class Sidebar extends Component {
  render(props, state) {
    return (<div class="navbar-default sidebar" role="navigation">
      <div class="sidebar-nav navbar-collapse">
        <ul class="nav in" id="side-menu">
          <li>
            <a href="/">
              <i class="fa fa-dashboard fa-fw"></i> Dashboard
            </a>
          </li>
        </ul>
      </div>
    </div>);
  }
}

export default Sidebar;
