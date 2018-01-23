import React from 'react'
import { shallow } from 'enzyme'

import LargeBox from '../LargeBox'

describe('<LargeBox />', () => {
  it('should render a <div>', () => {
    const wrapper = shallow(<LargeBox />)

    expect(wrapper.find('div').exists()).toBe(true)
  })
})
