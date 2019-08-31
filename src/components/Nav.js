import React, { Component } from 'react';
import FilterBar from './FilterBar';
import piggy from '../porco.png'

class Nav extends Component {

	render() {
		return (
			<div className="navWrapper ui two column grid">
				<div className="column">
					<FilterBar
						handleFilter={this.props.handleFilter}
						handleSort={this.props.handleSort}
					/>
				</div>
				<div className="column">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
			</div>
		);
	}

}

export default Nav;
