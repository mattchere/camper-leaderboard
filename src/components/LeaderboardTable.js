import React from 'react';
import RankingHeader from './RankingHeader';
import UserRow from './UserRow';
import $ from 'jquery';

class LeaderboardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: [],
      recent: [],
      allTime: []
    }
    this.showRecent = this.showRecent.bind(this);
    this.showAllTime = this.showAllTime.bind(this);
    this.setRecent = this.setRecent.bind(this);
    this.setAllTime = this.setAllTime.bind(this);
    this.setShow = this.setShow.bind(this);
  }
  
  get(url, store) {
    $.get(url, function(data) {
      this.setState({
        store: data
      });
    });
  }

  showRecent() {
    if (this.state.recent.length === 0) {
      $.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent', this.setRecent);
    }
    else {
      this.setShow(this.state.recent);
    }
  }

  showAllTime() {
    if (this.state.allTime.length === 0) {
      $.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', this.setAllTime);
    }
    else {
      this.setShow(this.state.allTime);
    }
  }
  
  setAllTime(data) {
    this.setState({
      allTime: data
    });
    this.setShow(data);
  }

  setRecent(data) {
    this.setState({
      recent: data
    });
    this.setShow(data);    
  }

  setShow(data) {
    this.setState({
      show: data
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
            <td className="leaderboard-table-header" colSpan="4">Leaderboard</td>
          </tr>
        </thead>
        <tbody>
        <RankingHeader recent={this.showRecent} allTime={this.showAllTime} />
        {this.state.show.map((user, i) => <UserRow user={user} id={i} key={i} />)}
        </tbody>
      </table>
    );
  }
}

export default LeaderboardTable;