import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import { colors } from '../../config'

import README from '../../../README.md'

import ComponentREADME from './README.md'
import FoldingCube from './index.jsx'

storiesOf('components/FoldingCube', module)
  .addDecorator(withDocs(ComponentREADME))
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <FoldingCube />
  ))
  .add('Different size and colors', () => (
    <FoldingCube
      size={60}
      cubeCol2={colors.secondary}
      cubeCol4={colors.secondary}
    />
  ))
