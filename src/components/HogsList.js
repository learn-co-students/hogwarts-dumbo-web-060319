import React, { Component } from 'react';
import HogCard from './HogCard';

class HogsList extends Component {

  filteredHogs = () => {
    return this.props.greasedFilter ? this.sortByAttr().filter(i => i.greased === true) : this.sortByAttr()
  }

  sortByAttr = () => {
    const attr = this.props.sortBy
    const sortedHogs = attr ? this.props.hogsData.sort((a, b) => (a[attr] > b[attr]) ? 1 : -1) : this.props.hogsData
    return attr === 'weight' ? sortedHogs.reverse() : sortedHogs
  }


  render() {
    return (
      <div className='ui three column grid'>
        {this.filteredHogs().map((hog) =>
          <div key={hog.name} className='column'>
            <HogCard key={hog.name} hog={hog} />
          </div>)}
      </div>
    );
  }
}

export default HogsList;
