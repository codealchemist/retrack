import styled from 'styled-components'

export const SliderContainer = styled.div`
  padding: 0 5px 0 5px;
  display: flex;
  align-items: center;
  p {
    margin: 0;
    padding-left: 5px;

    &:first-child {
      padding-right: 5px;
      padding-left: 0;
    }
  }

  .MuiSlider-root {
    color: #fd971f;
  }

  .MuiSlider-thumb:hover {
    box-shadow: 0px 0px 0px 8px rgba(153, 151, 31, 0.3);
  }
`

export const SliderValue = styled.div`
  text-align: center;
  color: #f8f8f0;
  font-size: 0.6em;
  color: #fd971f;
`
