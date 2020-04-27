import React, { createRef, useEffect } from 'react'
import { Container } from './elements'
import WaveSurfer from 'wavesurfer.js'
import Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor'

const Waveform = ({ file }) => {
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
          }
        })
      ]
    })
    wavesurfer.loadBlob(file)
  }, [file])

  return <Container ref={el}></Container>
}

export default Waveform
