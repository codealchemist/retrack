import React, { createRef, useEffect, useState, useGlobal } from 'reactn'
import { Container } from './elements'
import WaveSurfer from 'wavesurfer.js'
import Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor'

const Waveform = ({ file, name }) => {
  const [isPlaying] = useGlobal('isPlaying')
  const [progress, setProgress] = useGlobal('progress')
  const [wavesurfer, setWavesurfer] = useState()
  const el = createRef()

  useEffect(() => {
    if (!file) return
    const wavesurfer = WaveSurfer.create({
      container: el.current,
      responsive: true
      // cursorWidth: 0,
      // progressColor: 'transparent',
    })
    wavesurfer.loadBlob(file)
    setWavesurfer(wavesurfer)
    el.current.focus()
    el.current.click()
  }, [file])

  useEffect(() => {
    if (!wavesurfer) return
    wavesurfer.playPause()
  }, [isPlaying])

  useEffect(() => {
    if (typeof progress !== 'number') return
    console.log('Adjust SEEK', progress)
    wavesurfer.seekTo(progress)
  }, [progress])

  return <Container ref={el}></Container>
}

export default Waveform
