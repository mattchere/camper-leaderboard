import React from 'react';
import '../App.css';

class User extends React.Component {
  render() {
    return (
      <td className="user">
        <img src={this.props.img} alt={this.props.name + "'s avatar"} className="avatar" />
        <a href={"https://www.freecodecamp.com/" + this.props.name}>{this.props.name}</a>  
      </td>
    );
    
  }
}

export default User;