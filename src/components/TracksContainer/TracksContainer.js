import React, {
  useState,
  useCallback,
  useEffect,
  useGlobal,
  createRef
} from 'reactn'
import styled from 'styled-components'
import ReactCursorPosition from 'react-cursor-position'
import { useDropzone } from 'react-dropzone'
import Hotkeys from 'react-hot-keys'
import Track from 'components/Track'
import { Container, Tracks, DropArea } from './elements'
import { WithPointer } from 'elements'
import TimeCursor from './TimeCursor'

const StyledReactCursorPosition = styled(ReactCursorPosition)`
  width: 100%;
  height: 100%;
`

const TracksContainer = () => {
  const [isPlaying, setIsPlaying] = useGlobal('isPlaying')
  const [audioFiles, setAudioFiles] = useState([])
  const onDrop = useCallback(
    (files) => {
      const addedFiles = []
      files.forEach((file) => {
        if (!file || !file.type || !file.type.match('audio')) return
        addedFiles.push(file)
      })
      setAudioFiles([...audioFiles, ...addedFiles])
    },
    [audioFiles]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noKeyboard: true
  })

  const onKeyDown = (key, event) => {
    setIsPlaying(!isPlaying)
    event.preventDefault()
    event.stopPropagation()
    console.log('PLAY/PAUSE')
  }

  return (
    <Container>
      <Hotkeys keyName="space" onKeyDown={onKeyDown}>
        <Tracks count={audioFiles.length}>
          {audioFiles.map((file, i) => (
            <Track file={file} key={`${file.name}${i}`} />
          ))}
        </Tracks>
      </Hotkeys>

      <WithPointer>
        <DropArea {...getRootProps()}>
          <input id="file-input" {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </DropArea>
      </WithPointer>
    </Container>
  )
}

export default TracksContainer
