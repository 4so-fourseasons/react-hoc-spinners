// @flow

import styled from 'styled-components'

const SmallBox = styled.div`
  @keyframes smallBoxAnim {
    0% {transform: scale(0.2);}
    100% {transform: scale(0.75);}
  }

  position: fixed;
  z-index: 1;

  width: ${props => props.size}px;
  height: ${props => props.size}px;

  background-color: ${props => props.innerColor};

  outline: 1px solid transparent;

  animation: smallBoxAnim ${props => props.speed}s alternate infinite ease-in-out;
`

export default SmallBox
