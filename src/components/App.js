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
  constructor(props) {
    super(props);
    this.state = {
      greasedFilter: false,
      sortBy: 'weight',
      hogsData: hogsDataWithImages
    };
  }

  handleFilter = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  }

  handleSort = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  filteredHogs = () => {
  }


  render() {
    return (
      <div className="App">
        <div className="ui one row grid">
          <Nav
            handleFilter={this.handleFilter}
            handleSort={this.handleSort}
          />
        </div>
        <HogsList hogsData={this.state.hogsData} />
      </div>
    )
  }
}

export default App;
