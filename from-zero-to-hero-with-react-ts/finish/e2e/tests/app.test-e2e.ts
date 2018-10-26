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
