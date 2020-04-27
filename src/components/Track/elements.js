import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #49483e;
  border: 1px solid #272822;
  display: grid;
  grid-template-columns: 20% 80%;
`
export const Controls = styled.div`
  width: 100%;
  height: 100%;
  background: #49483e;
  border-right: 1px solid #272822;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.div`
  color: #66d9ef;
  font-size: 1em;
  padding: 5px;
  border-bottom: 1px solid #3b3a32;
  margin-bottom: 10px;
`

export const KnobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 20px;

  div {
    align-items: center;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
`
