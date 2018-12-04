import { Injectable } from 'injection-js'
import { HttpClient } from '@martin_hotell/axios-http'

import { SWApiCollectionResponse, People } from '../../models'

@Injectable()
export class SwCharactersService {
  private base = 'people'

  // 1. inject HttpClient

  // get(charName: string): Promise<People[]> {
  //   return this.httpClient
  //     .get<SWApiCollectionResponse<People>>(this.base, {
  //       params: { search: charName }
  //     })
  //     .then((data) => data.data.results)
  // }
}
