import { Selector } from 'testcafe'

import { select } from '../utils'

export class AppPage {
  heading = Selector('h1')
  search = Selector(select('search'))
  loading = Selector(select('loading'))
  profile = Selector(select('profile'))
  error = Selector(select('error'))
}
