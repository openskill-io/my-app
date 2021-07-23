import React from 'react';
import './Cat.css'

function Cat(props) {
  return (
    <div style={{ margin: "0 auto", maxWidth: "1080px" }}>
      <div style={{ margin: "20px" }}>

        {
          props.cats.length === 1 && props.cats.map((cat) => {
            return <img style={{ margin: 10 }} height={300} width={300} key={cat.id} src={cat} />
          })
        }
        {
          props.cats.length > 1 && props.cats.map((cat) => {
            return <img style={{ margin: 10 }} height={300} width={300} key={cat.id} src={`https://cataas.com/cat/${cat.id}`} />
          })
        }
      </div >
    </div>
  )
}

export default Cat