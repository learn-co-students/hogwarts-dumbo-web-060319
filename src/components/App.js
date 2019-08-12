import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TilesContainer from './TilesContainer';

class App extends Component {

	state = {
		greased: false,
		weighted: false,
		name: false
	}

	handleGreasedClick = () => {
		this.setState({greased: !this.state.greased});
	};

	handleWeightedClick = () => {
		this.setState({weighted: !this.state.weighted});
		this.setState({name: false});
	};

	handleNameClick = () => {
		this.setState({name: !this.state.name});
		this.setState({weighted: false});
	};

	weightSortHogs = () => {
		if (this.state.weighted) {
			let newHogs = [...hogs];
			return newHogs.sort((a, b) => b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]);
		}
		else {
			return hogs;
		}
	}

	nameSort = () => {
		if (this.state.name) {
			let namedHogs = [...hogs];
			return namedHogs.sort((a, b) => {
				if (a.name < a.name) {
					return -1;
				}
				else if (a.name > a.name) {
					return 1;
				}
				return 0;
			});
		}
		else {
			return hogs;
		}
	}

	processedHogs = () => {
		let currHogs = this.state.name ? this.nameSort() : this.weightSortHogs();
		if (this.state.greased) {
			return currHogs.filter(hog => hog.greased)
		}
		else {
			return currHogs;
		}
	};

  render() {
    return (
      <div className="App">
        <Nav/>
        <button onClick={this.handleGreasedClick}>
      		{this.state.greased ? "Showing greased" : "Show greased only"}
  			</button>
  			<button onClick={this.handleWeightedClick}>
      		{this.state.weighted ? "Unsort by weight" : "Sort by weight"}
  			</button>
  			<button onClick={this.handleNameClick}>
      		{this.state.name ? "Unsort by name" : "Sort by name"}
  			</button>
        <TilesContainer hogs={this.processedHogs()}/>
      </div>
    )
  }
}

export default App;
