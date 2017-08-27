import React from 'react';
import SortableRecent from './SortableRecent';
import SortableAllTime from './SortableAllTime';

class RankingHeader extends React.Component {
  render() {
    return (
      <tr>
        <td>#</td>
        <td>Camper Name</td>
        <SortableRecent onClick={this.props.recent} />
        <SortableAllTime onClick={this.props.allTime} />
      </tr>
    );
    
  }
}

export default RankingHeader;