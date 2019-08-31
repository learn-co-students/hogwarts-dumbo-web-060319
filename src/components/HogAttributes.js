import React from 'react';

const HogAttributes = ({
  greased,
  highestMedal,
  specialty,
  weight
}) => (
  <div className='content'>
    <li className='weight'>
      <b>Weight:</b> {weight}
    </li>
    <li className='highestMedal'>
      <b>Highest Medal:</b> {highestMedal}
    </li>
    <li className='specialty'>
      <b>Specialty:</b> {specialty}
    </li>
    <li className='greased'>
      <b>Greased:</b> {greased ? 'Yes' : 'No'}
    </li>
  </div>
);

export default HogAttributes;
