// @flow

import styled from 'styled-components'

const LargeBox = styled.div`
  position: fixed;

  width: ${props => props.size}px;
  height: ${props => props.size}px;

  background-color: ${props => props.light};
  outline: 1px solid transparent;
`

export default LargeBox
