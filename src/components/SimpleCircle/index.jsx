import React from 'react'
import styled from 'styled-components'

import { colors } from '../../config'

import Wrapper from '../Wrapper'

const Circle = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  margin: 0 auto;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  border: ${props => props.thickness}px solid ${props => props.circleColor};
  border-radius: 50%;
  border-top-color: ${props => props.highlightColor};
  animation: spin ${props => props.speed}s infinite linear;
`

const SimpleCircle = ({
  size = 40,
  thickness = 4,
  circleColor = 'rgba(58, 58, 58, 0.2)',
  highlightColor = colors.primary,
  speed = 2
}: {
  size: number,
  thickness: number,
  circleColor: string,
  highlightColor: string,
  speed: number
}) => (
  <Wrapper>
    <Circle
      size={size}
      thickness={thickness}
      circleColor={circleColor}
      highlightColor={highlightColor}
      speed={speed}
    />
  </Wrapper>
)

export default SimpleCircle
