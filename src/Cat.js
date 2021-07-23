import React, { useEffect, useState } from 'react';

function Cat(props) {
  return (
    <div>
      {props.cats.map((cat) => {
        return <img style={{ margin: 10 }} height={300} width={300} key={cat.id} src={`https://cataas.com/cat/${cat.id}`} />
      })}
    </div>
  )
}

export default Cat