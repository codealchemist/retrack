import React from 'react'
import { Container, StatusBar, Title } from 'elements'
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
    </Container>
  )
}

export default App
