1. Implement SwCharactersService

```ts
get(charName: string): Promise<People[]> {
    return this.httpClient
      .get<SWApiCollectionResponse<People>>(this.base, {
        params: { search: charName }
      })
      .then((data) => data.data.results)
  }
```

1. Inject service to component via props
1. execute search on submit
1. register all providers
