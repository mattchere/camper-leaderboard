import React from 'react';
import User from './User';

class UserRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id + 1}</td>
        <User name={this.props.user.username} img={this.props.user.img} />
        <td>{this.props.user.recent}</td>
        <td>{this.props.user.alltime}</td>
      </tr>
    );
    
  }
}

export default UserRow;