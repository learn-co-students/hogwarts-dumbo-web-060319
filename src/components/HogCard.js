import React, { Component } from 'react';
import HogAttributes from './HogAttributes';

class HogCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleAttributes: false
    };
  }

  toggleAttributeVisibility = () => {
    this.setState({
      visibleAttributes: !this.state.visibleAttributes
    });
  }

  render() {
    return (
      <div className='ui fluid card pigTile' onClick={this.toggleAttributeVisibility}>
        <img src={this.props.hog.img} className='ui fluid image' alt={this.props.hog.name} />
        <h3 className='header'>{this.props.hog.name}</h3>
        {this.state.visibleAttributes ?
          <HogAttributes
            greased={this.props.hog.greased}
            highestMedal={this.props.hog.highestMedal}
            specialty={this.props.hog.specialty}
            weight={this.props.hog.weight} />
        : null}
        <div className="ui bottom attached button">
          <i className="add icon"></i>
          {this.state.visibleAttributes ? 'Hide Details' : 'Show Details'}
        </div>
      </div>
    );
  }

}

export default HogCard;
