import React from 'react';
import List from './List'
import Numbers from './Numbers'
import Picture from './Picture'

const Box = props => {
  let boxClass = `box ${props.boxClass}`

  let paragraph
  if (props.paragraph) {
    paragraph = <p>{props.paragraph}</p>
  }

  return (
    <div className={boxClass}>
    <h1>{props.header}</h1>
    {paragraph}
    <Numbers/>
    <Picture/>
    </div>
  )
}

export default Box;
