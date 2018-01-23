import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import README from './README.md'
import Cube from './index.jsx'

storiesOf('components/Cube', module)
  .add('Default', withDocs(
    README,
    () => (
      <Cube
        size={40}
        dark='#333333'
        light='#c8022f'
      />
    ))
  )
