// @Flow

import * as React from 'react'
import { branch, renderComponent } from 'recompose'

import Cube from '../components/Cube'
import SimpleCircle from '../components/SimpleCircle'

const getSpinner = (spinnerType: string | React.Node): React.Node => {
  switch (spinnerType) {
    case 'Cube':
      return Cube
    case 'SimpleCircle':
      return SimpleCircle
    default:
      return spinnerType
  }
}

export const makeWithLoadingIndicator = ({
  Container = React.Fragment,
  condition,
  spinnerType = 'SimpleCircle',
  spinnerConfig
}: {
  Container: React.Element,
  condition: (props: Object) => boolean,
  spinnerType?: string | React.Node,
  spinnerConfig?: Object
}) => {
  const Spinner = getSpinner(spinnerType)

  return branch(
    condition,
    renderComponent((propsOW) => {
      const props = {
        ...spinnerConfig,
        ...propsOW
      }

      return (
        <Container>
          <Spinner {...props} />
        </Container>
      )
    })
  )
}
