1.  call this.doSearch(term) within handleChange

1.  searchTerm Subject -> handleChange

1.  `results$` on searchTem && wrap doSearch with Observable

```ts
readonly results$ = this.searchTerm.pipe(
    // prevent memory leaks
    takeUntil(this.onUnmount),

    // wait 300ms after each keystroke before considering the term
    debounceTime(500),

    // ignore new term if same as previous term
    distinctUntilChanged(),

    // switch to new search observable each time the term changes
    switchMap((term: string) => (term ? this.doSearch(term) : of([]))),

    // catch errors
    catchError((error) => {
      console.error(error)
      return of([])
    })
  )
```

1.  subscribe on didMount and update state
