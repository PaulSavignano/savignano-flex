import React from 'react'
import { shallow } from 'enzyme'

import Flex from './Flex'

describe('Flex', () => {
  it('should match snapshot', () => {
    const props = {
      children: <div>Test</div>
    }
    const wrapper = shallow(<Flex {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})