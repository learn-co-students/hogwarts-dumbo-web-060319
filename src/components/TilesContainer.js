import React, { Component } from 'react';
import Tile from './Tile';

export default class TileContainer extends Component {

	render() {
		return(
			<div className="ui grid container" className="ui eight wide column">
				{this.props.hogs.map(hog => {
					return <Tile hogTile={hog} key={hog.name}/>
				})}
			</div>
		)
	}
}