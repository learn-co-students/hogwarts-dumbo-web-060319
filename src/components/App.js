import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tiles from "./Tiles.js"

class App extends Component {
  
  state = 
  {
    greased: 0,
    ungreased: 0,
    sortname: 0,
    sortweight: 0,
    showAll: 1
  }

  onGreased = () => 
  {
    this.setState
    ({
      greased: 1,
      ungreased: 0,
      sortname: 0,
      sortweight: 0,
      showAll: 0
    })
  }
  
  onUngreased = () => 
  {
    this.setState
    ({
      greased: 0,
      ungreased: 1,
      sortname: 0,
      sortweight: 0,
      showAll: 0
    })
  }
  onSortName = () => 
  {
    this.setState
    ({

      sortname: 1,
      sortweight: 0,
      showAll: 1
    })
  }
  onSortWeight = () => 
  {
    this.setState
    ({
      sortname: 0,
      sortweight: 1,
      showAll: 1
    })
  }

  onShowAll = () => 
  {
    this.setState
    ({
      greased: 0,
      ungreased: 0,
      sortname: 0,
      sortweight: 0,
      showAll: 1
    })
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <div>
                    <button id="showAllHogs" className="headerText" onClick = {this.onShowAll}>
                    <h5>Show All </h5>
                    </button>

                    <button id="greasedHogs" className="headerText" onClick = {this.onGreased}>
                    <h5>Show Greased Hogs </h5>
                    </button>
                    <button id="ungreasedHogs" className="headerText" onClick = {this.onUngreased}>
                    <h5>Show Ungreased Hogs </h5>
                    </button>
                    <button id="names" className="headerText" onClick = {this.onSortName}>
                    <h5>Sort By Name</h5>
                    </button>
                    <button id="greasedHogs" className="headerText" onClick = {this.onSortWeight}>
                    <h5>Sort By Weight </h5>
                    </button>
                    </div>
          <Tiles greased = {this.state.greased} ungreased = {this.state.ungreased} sortname = {this.state.sortname} sortweight = {this.state.sortweight} showAll = {this.state.showAll}/>
      </div>
    )
  }
}

export default App;
