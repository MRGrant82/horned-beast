import React from 'react';
import horn1 from './horn1.png';
import horn2 from './horn2.png';

function HornedBeast(props) {
  let imageSrc = null;

  if (props.title === 'Spider-Bug') {
    imageSrc = horn1;
  } else {
    imageSrc = horn2;
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <img src={imageSrc} alt={props.title} title={props.title} />
      <p>{props.description}</p>
      <p>Horns: {props.horns}</p>
    </div>
  );
}

export default HornedBeast;
