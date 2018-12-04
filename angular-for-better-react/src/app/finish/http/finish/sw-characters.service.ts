import { Injectable } from 'injection-js'
import { HttpClient } from '@martin_hotell/axios-http'

@Injectable()
export class SwCharactersService {
  private base = 'people'
  constructor(private httpClient: HttpClient) {}

  get(charName: string): Promise<object> {
    return this.httpClient
      .get(this.base, { params: { search: charName } })
      .then(data => data.data)
  }
}
