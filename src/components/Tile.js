import React, { Component } from 'react';
import HogDetails from './HogDetails';

class Tile extends Component {

	state = {
		clicked: false
	}

	handleDetailsClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
  	const {name} = this.props.hogTile;
		const hogImageSrc = require(`../hog-imgs/${name.toLowerCase().replace(/ /g, "_" )}.jpg`);
		
		return (
			<div className="pigTile">
				<div onClick={this.handleDetailsClick}>
					<h2 className="hoggyText"> {name} </h2> 
					<img src={hogImageSrc} alt=""/>
				</div>
				<div className="extra content">
					{this.state.clicked ? <HogDetails hog={this.props.hogTile} /> : null}
				</div>
			</div>
		);
	}
}

export default Tile;