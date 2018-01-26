import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import README from '../../../README.md'

import ComponentREADME from './README.md'
import Cube from './index.jsx'

storiesOf('components/Cube', module)
  .addDecorator(withDocs(ComponentREADME))
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <Cube
      size={40}
      dark='#333333'
      light='#c8022f'
    />
  ))
