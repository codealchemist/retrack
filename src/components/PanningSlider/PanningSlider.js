import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import { SliderContainer, SliderValue } from './elements'

const PanningSlider = () => {
  const [panning, setPanning] = useState(0)
  const onPanningChange = (event, value) => {
    setPanning(value - 50)
  }

  return (
    <>
      <SliderContainer>
        <p>L</p>
        <Slider track={false} defaultValue={50} onChange={onPanningChange} />
        <p>R</p>
      </SliderContainer>
      <SliderValue>{panning}</SliderValue>
    </>
  )
}

export default PanningSlider
