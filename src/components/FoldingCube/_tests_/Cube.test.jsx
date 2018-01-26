import React from 'react'
import { shallow } from 'enzyme'

import Cube from '../Cube'

describe('Cube', () => {
  it('should render <div>', () => {
    const wrapper = shallow(<Cube />)

    expect(wrapper.find('div').exists()).toBe(true)
  })
})
