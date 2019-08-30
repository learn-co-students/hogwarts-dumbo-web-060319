import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogIndex from './HogIndex'
import hogs from '../porkers_data';


class App extends Component {

  state = {
    allHogs: [],
    greased: false,
    sortByName: false,
    sortByWeight: false
  }

  componentDidMount(){
    this.setState({
      allHogs: hogs
    })
  }

  filterByGrease = () => {
    this.setState({
      greased: !this.state.greased
    })
  }

  filterByName = () => {
    this.setState({
      sortByName: !this.state.sortByName,
      greased: false
    })
  }

  filterByWeight = () => {
    this.setState({
      sortByWeight: !this.state.sortByWeight
    })
  }

  render() {
    let filteredHogs = [...this.state.allHogs]

    if (this.state.greased) {
      filteredHogs = filteredHogs.filter(hog => {
        return hog.greased === true
      })
    }

    if (this.state.sortByName) {
      filteredHogs.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    if (this.state.sortByWeight) {
      filteredHogs.sort((a, b) => {
        return (a[`weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water`] - b[`weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water`])
      })
    }
    return (
      <div className="App">
          < Nav 
            filterByGrease={this.filterByGrease} 
            filterByName={this.filterByName}
            filterByWeight={this.filterByWeight}
            clicked={this.state.sortByWeight}
          />
          < HogIndex hogs={filteredHogs} />
      </div>
    )
  }
}

export default App;
