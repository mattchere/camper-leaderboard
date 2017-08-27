import React from 'react';
import RankingHeader from './RankingHeader';
import UserRow from './UserRow';
import $ from 'jquery';

class LeaderboardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.showRecent = this.showRecent.bind(this);
    this.showAllTime = this.showAllTime.bind(this);
    this.setUsers = this.setUsers.bind(this);
  }

  showRecent() {
    $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', this.setUsers);
  }

  showAllTime() {
    $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', this.setUsers);
  }

  setUsers(data) {
    this.setState({
      users: data
    });
  }

  componentWillMount() {
    this.showRecent();
  }

  render() {
    return (
      <table className="leaderboard-table">
        <thead>
          <tr>
            <td>Leaderboard</td>
          </tr>
        </thead>
        <tbody>
        <RankingHeader recent={this.showRecent} allTime={this.showAllTime} />
        {this.state.users.map((user, i) => <UserRow user={user} id={i} key={i} />)}
        </tbody>
      </table>
    );
    
  }
}

export default LeaderboardTable;