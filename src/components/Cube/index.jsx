// @flow

import React from 'react'

import { colors } from '../../config'

import Wrapper from '../Wrapper'

import Loader from './Loader'
import LargeBox from './LargeBox'
import SmallBox from './SmallBox'

const Cube = ({
  size = 40,
  dark = colors.secondary,
  light = colors.primary
}: {
  size: number,
  dark: string,
  light: string
}) => (
  <Wrapper>
    <Loader size={size}>
      <LargeBox light={light} size={size} />
      <SmallBox dark={dark} size={size} />
    </Loader>
  </Wrapper>
)

export default Cube
