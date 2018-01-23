import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../Loader'

describe('<Loader />', () => {
  it('should render a <div>', () => {
    const wrapper = shallow(<Loader />)

    expect(wrapper.find('div').exists()).toBe(true)
  })
})
