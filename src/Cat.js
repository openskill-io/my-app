import React, { useEffect, useState } from 'react';

function Cat() {
  const [cats, setCats] = useState([]);
  useEffect(function () {
    fetch(`https://cataas.com/api/cats`)
      .then((response) => response.json())
      .then((catsdata) => {
        setCats(catsdata);
      }).catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {cats.map((cat) => {
        return <img key={cat.id} src={`https://cataas.com/cat/${cat.id}`} />
      })}
    </div>
  )
}

export default Cat