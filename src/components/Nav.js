import React, { Component } from 'react';
import FilterBar from './FilterBar';

class Nav extends Component {

	render() {
		return (
			<FilterBar
				handleGreasedFilterClick={this.props.handleGreasedFilterClick}
				handleSortByClick={this.props.handleSortByClick}
			/>
		);
	}

}

export default Nav;
