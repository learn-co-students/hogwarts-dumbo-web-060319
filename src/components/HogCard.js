import React, { Component } from 'react';

export default class HogCard extends Component {

  state = {
    clicked: false
  }
  
  imageUrl = () => {  
    let format = this.props.hog.name.toLowerCase().split(' ').join('_')
    return require(`../hog-imgs/${format}.jpg`)
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){

    return(
      <div className="pigTile" onClick={this.clickHandler} >
        <h3>{this.props.hog.name}</h3>
        <img src={this.imageUrl()} alt=""/>
        {this.state.clicked === true ? 
          <ul>
            <p>specialty: {this.props.hog.specialty}</p> 
            <p>{this.props.hog.greased ? "this hog greased" : "this hog ain't greased"}</p>
            <p>weight: {this.props.hog[`weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water`]}</p>
            <p>highest medal achieved: {this.props.hog[`highest medal achieved`]}</p>
          </ul>
        : null}
      </div>
    )
  }
}