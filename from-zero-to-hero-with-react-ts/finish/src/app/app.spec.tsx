import { mount } from 'enzyme'
import React from 'react'

import { HttpClient } from './http-client.service'
import { App, Data } from './app'
import { Profile } from './profile'
import { Search } from './search'
import { UserService } from './user.service'

import mockData from './data.json'
import { UserProfile } from './user-profile'
import { UserRepos } from './user-repos'

describe(`App`, () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  const profileMock = {
    bio: mockData.users.hotell,
    repos: mockData.repos.hotell
  } as Data

  const userService = new UserService(new HttpClient('http://foo.api'))

  it(`should search for particular user on github`, (done) => {
    const getProfileSpy = jest.spyOn(userService, 'getProfile').mockResolvedValue(profileMock)

    const wrapper = mount<App>(<App userService={userService} />)

    const search = wrapper.find<Search['props']>(Search)
    const searchInput = search.find('input')
    let profile = wrapper.find<Profile['props']>(Profile)
    let loading = wrapper.find('[data-test-id="loading"]')
    let error = wrapper.find('[data-test-id="error"]')

    expect(search.exists()).toBeTruthy()
    expect(profile.exists()).toBeFalsy()
    expect(loading.exists()).toBeFalsy()
    expect(error.exists()).toBeFalsy()
    expect(getProfileSpy).not.toHaveBeenCalled()

    searchInput.simulate('change', { target: { value: 'hotell' } })
    search.simulate('submit')

    loading = wrapper.find('[data-test-id="loading"]')

    expect(loading.exists()).toBeTruthy()
    expect(getProfileSpy).toHaveBeenCalledWith('hotell')

    jest.advanceTimersByTime(2000)

    setImmediate(() => {
      wrapper.update()

      loading = wrapper.find('[data-test-id="loading"]')
      profile = wrapper.find<Profile['props']>(Profile)

      expect(loading.exists()).toBeFalsy()
      expect(profile.exists()).toBeTruthy()

      expect(profile.find(UserProfile).exists()).toBeTruthy()
      expect(profile.find(UserRepos).exists()).toBeTruthy()

      wrapper.unmount()
      done()
    })
  })

  afterEach(() => {
    jest.clearAllTimers()
  })
})
