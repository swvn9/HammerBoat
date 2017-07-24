import { h, render, Component } from 'preact';

class GuildTableRow extends Component {
  render(props, state) {
    return (
      <tr>
        <td>{props.guild.id}</td>
        <td>{props.guild.name}</td>
        <td>TODO</td>
      </tr>
    );
  }
}

class GuildsTable extends Component {
  render(props, state) {
    if (!props.guilds) {
      return <h1>Loading State Here</h1>;
    }

    var rows = [];
    for (var guild of props.guilds) {
      rows.push(<GuildTableRow guild={guild} />);
    }

    return (
      <div class="table-responsive">
        <table class="table table-sriped table-bordered table-hover">
          <thead>
            <tr>
              <th>IDs</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GuildsTable;
