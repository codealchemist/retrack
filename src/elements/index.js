import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export const StatusBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  background: black;
  z-index: 30;
  top: 0;
  position: sticky;
`

export const Title = styled.div`
  font-size: 1.75em;
  color: #f8f8f0;

  b {
    color: #e6db74;
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  color: black;

  svg {
    font-size: 50vw;
    opacity: 0.25;
  }
`

export const WithPointer = styled.div`
  cursor: pointer;
  height: 100%;
`
