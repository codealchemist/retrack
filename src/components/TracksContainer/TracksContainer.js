import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Track from 'components/Track'
import { Container, Tracks, DropArea } from './elements'
import { WithPointer } from 'elements'

const TracksContainer = () => {
  const [audioFiles, setAudioFiles] = useState([])
  const onDrop = useCallback(
    (files) => {
      console.log('Dropped files', files)
      console.log('audioFiles', audioFiles)
      const addedFiles = []
      files.forEach((file) => {
        if (!file || !file.type || !file.type.match('audio')) return
        addedFiles.push(file)
      })
      console.log('FILES', [...audioFiles, ...addedFiles])
      setAudioFiles([...audioFiles, ...addedFiles])
    },
    [audioFiles]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Container>
      <Tracks count={audioFiles.length}>
        {audioFiles.map((file, i) => (
          <Track file={file} key={`${file.name}${i}`} />
        ))}
      </Tracks>

      <WithPointer>
        <DropArea {...getRootProps()}>
          <input {...getInputProps()} />
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
