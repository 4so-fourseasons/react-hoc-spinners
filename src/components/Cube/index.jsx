// @flow

import React from 'react'

import { colors } from '../../config'

import Wrapper from '../Wrapper'

import Loader from './Loader'
import LargeBox from './LargeBox'
import SmallBox from './SmallBox'

const Cube = ({
  size = 40,
  innerColor = colors.secondary,
  outerColor = colors.primary,
  speed = 1.25
}: {
  size: number,
  innerColor: string,
  outerColor: string,
  speed: number
}) => (
  <Wrapper>
    <Loader speed={speed} size={size}>
      <LargeBox outerColor={outerColor} size={size} />
      <SmallBox innerColor={innerColor} size={size} speed={speed} />
    </Loader>
  </Wrapper>
)

export default Cube
