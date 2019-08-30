import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
      <button onClick={props.filterByGrease}>Filter by Grease</button>
      <button onClick={props.filterByName}>Sort by Name</button>
      <label>
        <input 
          type="radio" 
          onClick={props.filterByWeight} 
          checked={props.clicked} 
          value="Sort by Weight"/>
      Sort by Weight
      </label>
		</div>
	)
}

export default Nav
