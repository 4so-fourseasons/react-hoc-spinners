import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import README from '../../../README.md'

import ComponentREADME from './README.md'
import SimpleCircle from './index.jsx'

storiesOf('components/SimpleCircle', module)
  .addDecorator(withDocs(ComponentREADME))
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <SimpleCircle />
  ))
