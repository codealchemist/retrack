import React, { createRef, useEffect, useState, useGlobal } from 'reactn'
import { Container } from './elements'
import WaveSurfer from 'wavesurfer.js'
import Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor'

const Waveform = ({ file }) => {
  const [isPlaying] = useGlobal('isPlaying')
  const [wavesurfer, setWavesurfer] = useState()
  const el = createRef()

  useEffect(() => {
    if (!file) return
    const wavesurfer = WaveSurfer.create({
      container: el.current,
      plugins: [
        Cursor.create({
          showTime: true,
          opacity: 1,
          customShowTimeStyle: {
            'background-color': '#000',
            color: '#fff',
            padding: '2px',
            'font-size': '10px'
          },
          customStyle: {
            position: 'fixed',
            'z-index': 10
          }
        })
      ]
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

  return <Container ref={el}></Container>
}

export default Waveform
