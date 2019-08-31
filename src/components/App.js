import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsList from './HogsList';
import hogsData from '../porkers_data';

function importAllImages(r) {
  return r.keys().map(r);
}

const hogsImages = importAllImages(require.context(
  '../hog-imgs/', false, /\.(png|jpe?g|svg)$/));

const hogsDataWithImages = hogsData.map(hog =>
  hog = {...hog,
    'img': hogsImages.find(i => i.includes(
      hog.name.toLowerCase().replace(/\s/g, '_')))
  }
)

class App extends Component {
  constructor() {
    super();
    this.state = {
      greasedFilter: null,
      sortBy: null
    };
  }

  handleGreasedFilterClick = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  handleSortByClick = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="ui one row grid">
          <Nav
            handleGreasedFilterClick={this.handleGreasedFilterClick}
            handleSortByClick={this.handleSortByClick}
          />
        </div>
        <HogsList
          hogsData={hogsDataWithImages}
          greasedFilter={this.state.greasedFilter}
          sortBy={this.state.sortBy}
        />
      </div>
    )
  }
}

export default App;
