import React from 'react';

class SortableRecent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <td>
        <a onClick={this.handleClick}>Points in past 30 days</a>
      </td>
    );
    
  }
}

export default SortableRecent;