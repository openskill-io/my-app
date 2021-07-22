import React from 'react';
import './Cat.css'

function Cat(props) {
  return (
    <div className="cat">
      {props.cats.map((cat) => {
        return <img style={{ margin: 10 }} height={300} width={300} key={cat.id} src={`https://cataas.com/cat/${cat.id}`} alt="a perfect cat" />
      })}
    </div>
  )
}

export default Cat