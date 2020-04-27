import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Track from 'components/Track'
import { Container, DropArea } from './elements'

const TracksContainer = () => {
  const [audioFiles, setAudioFiles] = useState([])
  const onDrop = useCallback((files) => {
    console.log('FILES', files)
    const addedFiles = []
    files.forEach((file) => {
      if (!file || !file.type || !file.type.match('audio')) return
      addedFiles.push(file)
    })
    setAudioFiles(audioFiles.concat(addedFiles))
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Container>
      {!audioFiles.length && <Track></Track>}
      {audioFiles.map((file) => (
        <Track file={file} />
      ))}

      <DropArea {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </DropArea>
    </Container>
  )
}

export default TracksContainer
