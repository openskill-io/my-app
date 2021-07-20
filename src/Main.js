import React, { useCallback, useEffect, useState } from 'react';

import Openskill from './Openskill';

function Main() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const timecb = useCallback(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  });

  useEffect(() => {
    timecb();
  }, [])

  const list = [];
  for (let index = 0; index < 10; index++) {
    list.push(index);
  }
  const openskills = list.map(function (element, index) {
    return <Openskill key={element} index={index} name={`Openskill${element}`} currentTime={currentTime.toLocaleTimeString()} />
  });

  return (
    <div>
      {openskills}
    </div>
  );
}

export default Main;