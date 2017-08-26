import React from 'react';
import SortableRecent from './SortableRecent';
import SortableAllTime from './SortableAllTime';

class RankingHeader extends React.Component {
  render() {
    return (
      <tr>
        <td>#</td>
        <td>Camper Name</td>
        <SortableRecent />
        <SortableAllTime />
      </tr>
    );
    
  }
}

export default RankingHeader;