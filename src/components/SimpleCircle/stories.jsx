import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import README from './README.md'
import SimpleCircle from './index.jsx'

storiesOf('components/SimpleCircle', module)
  .add('Default', withDocs(
    README,
    () => (
      <SimpleCircle />
    ))
  )
