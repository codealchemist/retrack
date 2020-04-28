import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`

export const Tracks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 10;
`

export const DropArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a6e22e;
  min-height: 20vh;
`
