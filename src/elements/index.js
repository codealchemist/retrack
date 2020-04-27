import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const StatusBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
  background: black;
  z-index: 30;
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
