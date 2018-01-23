import React from 'react'
import { shallow } from 'enzyme'

import SmallBox from '../SmallBox'

describe('<SmallBox />', () => {
  it('should render a <div>', () => {
    const wrapper = shallow(<SmallBox />)

    expect(wrapper.find('div').exists()).toBe(true)
  })
})
