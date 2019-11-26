# Language features

## Object.keys

```ts
const keys = <O>(o: O) => {
  return Object.keys(o) as (keyof O)[]
}
```

[Learn more](https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript)

## filter out falsy values from Array

```ts
type Nullable<T> = T extends null | undefined ? T : never

const isPresent = <T>(value: T): value is NonNullable<T> => value != null

const isBlank = <T>(value: T): value is Nullable<T> => value == null
```

## enums

- don't use enums

prior to const assertions they were kinda oki'sh.

Don't use them, we have object dictionaries for those.

## namespace

- don't use namespace

## class accessors

**public**

DON'T

```ts
class AppComponent {
  public handleChange() {}
  public render() {}
}
```

**private**

DON'T

```ts
class AppComponent {
  private handleChange() {}
  private render() {}
}
```

- not really private
- nominal typing is now active (ups!) - Bad for mocking etc

## generics argument vs `as`

@TODO

## interface vs type

One major difference between type aliases vs interfaces
are that **interfaces are open and type aliases are closed**.
This means you can extend an interface by declaring it
a second time.

```ts
interface Kitten {
  purrs: boolean
}

interface Kitten {
  colour: string
}

// In the other case a type cannot be changed outside of
// it's declaration.

type Puppy = {
  color: string
}

// 🚨 EXPECT ERROR
type Puppy = {
  toys: number
}
```

**interfaces cannot extends/define union types**

RULE OF THUMB:

Always use interface for public API's definition when authoring a library or 3rd party ambient type definitions

## void vs undefined

- void as function return type ignores return value (okish for NodeJS callback API's)
- void can be skipped if used as function argument

## empty type (object), is `{}` sufficient ?

- `{}` is dangerous, former bottom type

```ts
// AVOID
let emptyObj = {}

// BETTER BUT STILL NOT GOOD
let emptyObj: object = {}

// DICTIONARY OK
let emptyObj: Record<string, unknown> = {}

// DICTIONARY OK and STRICT but dangerous
let emptyObj = {} as { who: string }

// BEST
let emptyObj = null as { who: string } | null
```

## prefer function types instead method declaration (covariance,bivariance)

@TODO