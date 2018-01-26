import React from 'react'
import { mount } from 'enzyme'

import Cube from '../../components/Cube'
import SimpleCircle from '../../components/SimpleCircle'

import makeWithLoadingIndicator, { getSpinner } from '../makeWithLoadingIndicator'

const CustomComponent = () => <h1>CustomComponent</h1>

describe('getSpinner()', () => {
  it('should render Cube', () => {
    const result = getSpinner('Cube')

    expect(result).toEqual(Cube)
  })

  it('should render SimpleCircle', () => {
    const result = getSpinner('SimpleCircle')

    expect(result).toEqual(SimpleCircle)
  })

  it('should render custom component', () => {
    const result = getSpinner(CustomComponent)

    expect(result).toEqual(CustomComponent)
  })
}) // end getSpinner()

describe('makeWithLoadingIndicator', () => {
  const WrappedComponent = (props) => (
    <h1>WrappedComponent</h1>
  )

  it('should render wrapped component, if condition HOC returns false', () => {
    const condition = () => false
    const widthLoadingIndicator = makeWithLoadingIndicator({ condition })

    const ComponentWithLoadingIndicator = widthLoadingIndicator(WrappedComponent)

    const wrapper = mount(<ComponentWithLoadingIndicator />)
    expect(wrapper.find(WrappedComponent).exists()).toBe(true)
    expect(wrapper.find(SimpleCircle).exists()).toBe(false)
  })

  it('should render SimpleCircle by default if condition returns true', () => {
    const condition = () => true
    const widthLoadingIndicator = makeWithLoadingIndicator({ condition })

    const ComponentWithLoadingIndicator = widthLoadingIndicator(WrappedComponent)

    const wrapper = mount(<ComponentWithLoadingIndicator />)
    expect(wrapper.find(SimpleCircle).exists()).toBe(true)
    expect(wrapper.find(WrappedComponent).exists()).toBe(false)
  })

  it('should render CustomComponent if condition returns true and custom spinner was defined', () => {
    const condition = () => true
    const widthLoadingIndicator = makeWithLoadingIndicator({
      condition,
      spinnerType: CustomComponent
    })

    const ComponentWithLoadingIndicator = widthLoadingIndicator(WrappedComponent)

    const wrapper = mount(<ComponentWithLoadingIndicator />)
    expect(wrapper.find(SimpleCircle).exists()).toBe(false)
    expect(wrapper.find(WrappedComponent).exists()).toBe(false)
    expect(wrapper.find(CustomComponent).exists()).toBe(true)
  })

  it('should render custom Container if condition is true', () => {
    const Container = () => <h1>Container</h1>
    const condition = () => true

    const widthLoadingIndicator = makeWithLoadingIndicator({
      Container,
      condition
    })

    const ComponentWithLoadingIndicator = widthLoadingIndicator(WrappedComponent)

    const wrapper = mount(<ComponentWithLoadingIndicator />)
    expect(wrapper.find(Container).exists()).toBe(true)
    expect(wrapper.find(WrappedComponent).exists()).toBe(false)
  })
}) // end makeWithLoadingIndicator
