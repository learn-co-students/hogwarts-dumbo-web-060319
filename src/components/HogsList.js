import React, { Component } from 'react';
import HogCard from './HogCard';

class HogsList extends Component {
  render() {
    return (
      <div className='ui three column grid'>
        {this.props.hogsData.map((hog, idx) =>
          <div key={idx} className='column'>
            <HogCard key={idx} hog={hog} />
          </div>)}
      </div>
    );
  }
}

export default HogsList;
