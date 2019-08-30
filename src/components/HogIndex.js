import React, { Component } from 'react';
import HogCard from './HogCard.js'

export default class HogIndex extends Component {
  


  render(){


    return(
      <div>
        {this.props.hogs.map((hog, index) => <HogCard key={hog.name} hog={hog} />)}
      </div>
    )
  }
}