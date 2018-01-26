import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from '../../Wrapper'
import SimpleCircle, { Circle } from '../index'

describe('SimpleCircle', () => {
  it('should render Wrapper', () => {
    const wrapper = shallow(<SimpleCircle />)

    expect(wrapper.find(Wrapper).exists()).toBe(true)
  })

  it('should render Circle', () => {
    const wrapper = shallow(<SimpleCircle />)

    expect(wrapper.find(Circle).exists()).toBe(true)
  })
})

describe('Circle', () => {
  it('should render <div>', () => {
    const wrapper = shallow(<Circle />)

    expect(wrapper.find('div').exists()).toBe(true)
  })
})
