import React from 'react'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import { Container, StatusBar, Title, Background } from 'elements'
import TracksContainer from 'components/TracksContainer'

const App = () => {
  return (
    <Container>
      <StatusBar>
        <Title>
          <b>re</b>Track
        </Title>
      </StatusBar>

      <TracksContainer />
      <Background>
        <VolumeUpIcon />
      </Background>
    </Container>
  )
}

export default App
