## install deps

```sh
yarn add -D testcafe
```

## Page Objects

**app.po.ts:**

```ts
import { Selector } from 'testcafe'

import { select } from '../utils'

export class AppPage {
  heading = Selector('h1')
  search = Selector(select('search'))
  loading = Selector(select('loading'))
  profile = Selector(select('profile'))
  error = Selector(select('error'))
}
```

## Tests

**app.test-e2e.ts**

```ts
import { AppPage } from '../pages'

const appPage = new AppPage()

fixture`App page`.page('localhost:1234').beforeEach(async (t) => {
  await t.setTestSpeed(0.5)
})

test('should have heading', async (t) => {
  await t.expect(appPage.heading.textContent).eql('Github Users search')
})

test('should successfully find user by name "hotell"', async (t) => {
  const searchInput = appPage.search.find('input')

  await t.typeText(searchInput, 'hotell').pressKey('enter')

  await t
    .expect(appPage.profile.exists)
    .ok()
    .expect(appPage.profile.innerText)
    .contains('Name: Martin Hochel')
})
```

## Utils

```ts
export const select = (id: string) => `[data-test-id="${id}"]`
```
