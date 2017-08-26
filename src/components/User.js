import React from 'react';
import '../App.css';

class User extends React.Component {
  render() {
    return (
      <td>
        <img src={this.props.img} alt={this.props.name + "'s avatar"} className="avatar" />
        <a>{this.props.name}</a>  
      </td>
    );
    
  }
}

export default User;