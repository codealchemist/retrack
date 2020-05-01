import React from 'react'
import { VerticalLine } from './elements'

const TimeCursor = ({ position }) => {
  const { x } = position
  console.log('X', x)
  return <VerticalLine x={x} />
}

export default TimeCursor
