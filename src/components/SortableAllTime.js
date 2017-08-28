import React from 'react';

class SortableAllTime extends React.Component {
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
        <a className="sort-link" onClick={this.handleClick}>All time points</a>
      </td>
    );
    
  }
}

export default SortableAllTime;