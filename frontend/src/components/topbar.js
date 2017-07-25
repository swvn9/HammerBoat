import { h, render, Component } from 'preact';
import Sidebar from './sidebar';
import state from '../state';

class Topbar extends Component {
  render() {
		return(
			<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
				<div class="navbar-header">
					<a class="navbar-brand">Rowboat</a>
				</div>

				<ul class="nav navbar-top-links navbar-right">
					<li><a onClick={() => state.user.logout()}><i class="fa fa-sign-out fa-fw"></i></a></li>
				</ul>

        <Sidebar />
			</nav>
    );
  }
}

export default Topbar;
