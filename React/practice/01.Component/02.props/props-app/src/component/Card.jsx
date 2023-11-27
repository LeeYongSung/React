import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <h3>{props.title}</h3>
        <h3>{props.content}</h3>
    </div>
  )
}
export default Card