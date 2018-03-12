import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs, withReadme } from 'storybook-readme'

import README from '../../README.md'

import ComponentREADME from './makeWithLoadingIndicator.README.md'
import { makeWithLoadingIndicator } from './makeWithLoadingIndicator.jsx'

const WrappedComponent = (props) => (
  <h1>Wrapped Component</h1>
)

storiesOf('HOCS/makeWithLoadingIndicator', module)
  .addDecorator(withDocs(ComponentREADME))
  .addDecorator(withReadme(README))
  .add('Condition is false -> display wrapped Component', () => {
    const WithLoadingIndicator = makeWithLoadingIndicator({
      condition: () => false
    })(WrappedComponent)

    return (
      <WithLoadingIndicator />
    )
  })
  .add('Condition is true -> display loading indicator', () => {
    const WithLoadingIndicator = makeWithLoadingIndicator({
      condition: () => true
    })(WrappedComponent)

    return (
      <WithLoadingIndicator />
    )
  })
  .add('Overwrite spinnerConfig', () => {
    const WithLoadingIndicator = makeWithLoadingIndicator({
      condition: () => true,
      spinnerConfig: {
        highlightColor: 'green'
      }
    })(WrappedComponent)

    return (
      <WithLoadingIndicator />
    )
  })
  .add('Specify spinner', () => {
    const WithLoadingIndicator = makeWithLoadingIndicator({
      condition: () => true,
      spinnerType: 'Cube'
    })(WrappedComponent)

    return (
      <WithLoadingIndicator />
    )
  })
  .add('Specify custom component as spinner', () => {
    const CustomComponent = (props) => (
      <h1>Custom Component</h1>
    )

    const WithLoadingIndicator = makeWithLoadingIndicator({
      condition: () => true,
      spinnerType: CustomComponent
    })(WrappedComponent)

    return (
      <WithLoadingIndicator />
    )
  })
