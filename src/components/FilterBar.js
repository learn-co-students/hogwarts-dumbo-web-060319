import React, { Component } from 'react';
import piggy from '../porco.png'

class FilterBar extends Component {

  render() {
    return (
      <div className="navWrapper ui three column grid">
        <div className='column'>
          <form onClick={this.props.handleGreasedFilterClick}>
            <ul>
              <li>
                <label>
                  Hide greased hogs
                  <input name="greasedFilter" type="checkbox" />
                </label>
              </li>
            </ul>
          </form>
        </div>
        <div className='column'>
          <form onClick={this.props.handleSortByClick}>
            <ul>
              <li>
                <label>
                  Sort by name
                  <input name="sortBy" type="radio" value="name" />
                </label>
              </li>
              <li>
                <label>
                  Sort by weight
                  <input name="sortBy" type="radio" value="weight" />
                </label>
              </li>
            </ul>
          </form>
        </div>
        <div className="TwirlyPig column">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
      </div>
    );
  }

}

export default FilterBar;
