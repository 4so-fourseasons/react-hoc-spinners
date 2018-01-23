import React from 'react'
import { storiesOf } from '@storybook/react'
import { withDocs } from 'storybook-readme'

import README from './makeWithLoadingIndicator.README.md'
import { makeWithLoadingIndicator } from './makeWithLoadingIndicator.jsx'

const WrappedComponent = (props) => (
  <h1>Wrapped Component</h1>
)

storiesOf('HOCS/makeWithLoadingIndicator', module)
  .add('Condition is false -> display wrapped Component', withDocs(
      README,
      () => {
        const WithLoadingIndicator = makeWithLoadingIndicator({
          condition: () => false
        })(WrappedComponent)

        return (
          <WithLoadingIndicator />
        )
      })
    )
  .add('Condition is true -> display loading indicator', withDocs(
    README,
    () => {
      const WithLoadingIndicator = makeWithLoadingIndicator({
        condition: () => true
      })(WrappedComponent)

      return (
        <WithLoadingIndicator />
      )
    })
  )
  .add('Overwrite spinnerConfig', withDocs(
    README,
    () => {
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
  )
  .add('Specify spinner', withDocs(
    README,
    () => {
      const WithLoadingIndicator = makeWithLoadingIndicator({
        condition: () => true,
        spinnerType: 'Cube'
      })(WrappedComponent)

      return (
        <WithLoadingIndicator />
      )
    })
  )
  .add('Specify custom component as spinner', withDocs(
    README,
    () => {
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
  )
