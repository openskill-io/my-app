import React, { useState } from 'react';

function Openskill(props) {
  return (
    <div>
      <h1>Hello from {props.name} component, index is {props.index} and the time is {props.currentTime} </h1>
    </div>
  );
}

export default Openskill;