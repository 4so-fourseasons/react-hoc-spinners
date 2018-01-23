// @flow

import styled from 'styled-components'

const Loader = styled.div`
  @keyframes loaderAnim {
    0% {transform: rotate(0deg);}
    100% { transform: rotate(90deg);}
  }

  margin: 0 auto;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: loaderAnim 1.25s infinite;
  outline: 1px solid transparent;
`

export default Loader
