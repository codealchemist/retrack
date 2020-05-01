import React, { useState } from 'react'
import { Donut } from 'react-dial-knob'
import { Container, Controls, Title, KnobContainer } from './elements'
import Waveform from 'components/Waveform'
import PanningSlider from 'components/PanningSlider'

const Track = ({ file }) => {
  const { name, size } = file
  const [volume, setVolume] = useState(80)
  const [panning, setPanning] = useState(50)
  const [trackName, setTrackName] = useState(name.replace(/\.[a-z0-9]{3}$/, ''))

  const onVolumeChange = (value) => {
    setVolume(value)
  }

  const onPanningChange = (value) => {
    setPanning(value)
  }

  return (
    <Container>
      <Controls>
        <Title>{trackName}</Title>

        <KnobContainer>
          <Donut
            diameter={40}
            min={0}
            max={100}
            step={1}
            value={volume}
            theme={{
              donutColor: '#FD971F',
              donutThickness: 5,
              bgrColor: '#3B3A32',
              centerColor: '#49483e',
              centerFocusedColor: '#49483e'
            }}
            onValueChange={onVolumeChange}
            ariaLabelledBy={'Volume'}
          >
            <label>Volume</label>
          </Donut>
        </KnobContainer>

        <PanningSlider />
      </Controls>
      <Waveform file={file} name={trackName}></Waveform>
    </Container>
  )
}

export default Track
