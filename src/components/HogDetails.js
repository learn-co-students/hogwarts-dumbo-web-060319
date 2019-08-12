import React from 'react';

const HogDetails = (props) => {
		const {specialty, greased} = props.hog;
		const weightRatio = props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"];
		const highestMedal = props.hog["highest medal achieved"];
	return(
		<div>
			<ul>
				<li>Specialty: {specialty}</li>
				<li>Greased: {greased ? "Yes" : "No"}</li>
				<li>Weight ratio: {weightRatio}</li>
				<li>Highest medal achieved: {highestMedal}</li>
			</ul>
		</div>
	)
}

export default HogDetails;