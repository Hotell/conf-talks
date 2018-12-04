export interface SWApiCollectionResponse<T extends object = object> {
  count: number
  next: string | null
  previous: string | null

  results: Array<T>
}

export interface People {
  name: string
  url: string
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  skin_color: string
  species: string[]
  starships: string[]
  vehicles: string[]
}
