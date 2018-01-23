import React from 'react'
import { shallow } from 'enzyme'

import Cube from '../index'
import Wrapper from '../../Wrapper'
import Loader from '../Loader'
import SmallBox from '../SmallBox'
import LargeBox from '../LargeBox'

describe('<Loader />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<Cube />)

    expect(wrapper.find(Wrapper).exists()).toBe(true)
  })

  it('should render <Loader />', () => {
    const wrapper = shallow(<Cube />)

    expect(wrapper.find(Loader).exists()).toBe(true)
  })

  it('should render <SmallBox />', () => {
    const wrapper = shallow(<Cube />)

    expect(wrapper.find(SmallBox).exists()).toBe(true)
  })

  it('should render <LargeBox />', () => {
    const wrapper = shallow(<Cube />)

    expect(wrapper.find(LargeBox).exists()).toBe(true)
  })
})
