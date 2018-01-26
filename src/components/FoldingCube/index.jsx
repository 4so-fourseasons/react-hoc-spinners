import React from 'react'

import { colors } from '../../config'

import Wrapper from './Wrapper'
import Cube from './Cube'

const FoldingCube = ({
  size = 40,
  cubeCol1 = colors.primary,
  cubeCol2 = colors.primary,
  cubeCol3 = colors.primary,
  cubeCol4 = colors.primary
}: {
  size?: number,
  cubeCol1?: string,
  cubeCol2?: string,
  cubeCol3?: string,
  cubeCol4?: string
}) => (
  <Wrapper size={size} >
    <Cube
      color={cubeCol1}
    />
    <Cube
      color={cubeCol2}
      rotateZ='90deg'
      delay={0.3}
    />
    {/* The positioning of cube 3 and 4 matters here! */}
    <Cube
      color={cubeCol4}
      rotateZ='270deg'
      delay={0.9}
    />
    <Cube
      color={cubeCol3}
      rotateZ='180deg'
      delay={0.6}
    />
  </Wrapper>
)

export default FoldingCube
