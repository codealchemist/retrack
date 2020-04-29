import React, {
  useState,
  useCallback,
  useEffect,
  useGlobal,
  createRef
} from 'reactn'
import { useDropzone } from 'react-dropzone'
import Hotkeys from 'react-hot-keys'
import Track from 'components/Track'
import { Container, Tracks, DropArea } from './elements'
import { WithPointer } from 'elements'

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

  const onKeyDown = () => {
    console.log('PLAY/PAUSE')
    setIsPlaying(!isPlaying)
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
