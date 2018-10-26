## install deps

```sh
yarn add -D jest ts-jest enzyme enzyme-adapter-react-16 @types/{jest,enzyme,enzyme-adapter-react-16}
```

## test config

**jest.config.js**

```js
// @ts-check

/**
 * @type {jest.InitialOptions}
 */
const config = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-tests.ts'
}

module.exports = config
```

**setup-tests.ts**

```ts
// setup file
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
```

## search.spec.tsx

```tsx
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
```
