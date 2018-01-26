import React from 'react'
import { shallow } from 'enzyme'

import Cube from '../Cube'
import Wrapper from '../Wrapper'
import FoldingCube from '../index'

describe('FoldingCube', () => {
  it('should render Wrapper', () => {
    const wrapper = shallow(<FoldingCube />)

    expect(wrapper.find(Wrapper).exists()).toBe(true)
  })

  it('should render 4x Cubes', () => {
    const wrapper = shallow(<FoldingCube />)

    expect(wrapper.find(Cube).length).toBe(4)
  })
})
