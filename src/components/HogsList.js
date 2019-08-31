import React, { Component } from 'react';
import HogCard from './HogCard';

class HogsList extends Component {

  filteredHogs = () => {
    const filtered = this.sortByAttr()
    return this.props.greasedFilter ? this.props.hogsData.filter(i => i.greased === true) : this.props.hogsData
  }

  sortByAttr = () => {
    const attr = this.props.sortBy
    return attr ? this.props.hogsData.sort((a, b) => (a[attr] > b[attr]) ? 1 : -1) : this.props.hogsData
  }


  render() {
    return (
      <div className='ui three column grid'>
        {this.filteredHogs().map((hog, idx) =>
          <div key={idx} className='column'>
            <HogCard key={idx} hog={hog} />
          </div>)}
      </div>
    );
  }
}

export default HogsList;
