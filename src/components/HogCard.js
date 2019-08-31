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
      <div className='ui fluid card'>
        <div className='image'><img src={this.props.hog.img} alt={this.props.hog.name} /></div>
        <div className='header'>{this.props.hog.name}</div>
        {this.state.visibleAttributes ?
          <HogAttributes
            greased={this.props.hog.greased}
            highestMedal={this.props.hog.highestMedal}
            specialty={this.props.hog.specialty}
            weight={this.props.hog.weight} />
        : null}
        <div className="ui bottom attached button" onClick={this.toggleAttributeVisibility}>
          <i className="add icon"></i>
          {this.state.visibleAttributes ? 'Hide Details' : 'Show Details'}
        </div>
      </div>
    );
  }

}

export default HogCard;
