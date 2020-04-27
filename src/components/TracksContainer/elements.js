import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background: #3b3a32;
  grid-template-columns: 100%;
  grid-template-rows: 20% 20% 20% 20%;
  padding-top: 1.75em;
  position: fixed;
  z-index: 10;
`

export const DropArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a6e22e;
`
