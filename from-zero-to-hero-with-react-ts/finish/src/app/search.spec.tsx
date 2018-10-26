import React from 'react'
import { mount } from 'enzyme'

import { Search } from './search'

describe(`Search`, () => {
  it(`should emit searchTerm string on submit`, () => {
    const onSearchSpy = jest.fn()
    const wrapper = mount<Search>(<Search onSearch={onSearchSpy} />)

    const input = wrapper.find('input[type="search"]')

    expect(input.exists()).toBeTruthy()

    expect(wrapper.state().search).toBe('')

    input.simulate('change', { target: { value: 'hotell' } })

    expect(wrapper.state().search).toBe('hotell')

    wrapper.simulate('submit')

    expect(onSearchSpy).toBeCalledWith('hotell')

    expect(wrapper.state('search')).toBe('')

    wrapper.unmount()
  })
})
