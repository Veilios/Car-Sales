import React from 'react';

// import { addFeature } from '../actions';

const AdditionalFeature = props => {
  console.log("AdditionFeature", props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature, props.feature.price)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default AdditionalFeature;
