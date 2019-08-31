import React, { Component } from 'react';

class FilterBar extends Component {

  render() {
    return (
      <div className='filter-bar'>
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
    );
  }

}

export default FilterBar;
