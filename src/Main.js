import React, { useState } from 'react';

import Openskill from './Openskill';

function Main() {
  const list = [];
  for (let index = 0; index < 10; index++) {
    list.push(index);
  }
  return (
    <div>
      {list.map(function (element) {
        return <Openskill key={element} name={`Openskill${element}`} />
      })}
    </div>
  );
}

export default Main;