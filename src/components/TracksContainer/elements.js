import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`

export const VerticalLine = styled.div`
  position: absolute;
  height: 100%;
  width: 1px;
  border-left: 1px solid black;
  ${({ x }) => {
    return `
      transform: translate(${x}px);
    `
  }}
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
  min-height: 20vh;
  color: #a6e22e;

  p {
    padding: 20px;
    border-radius: 5px;
    background: #3b3a32;
    opacity: 0.7;
    z-index: 20;
  }
`
