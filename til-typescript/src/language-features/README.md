# Language features

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

## enums

prior to const assertions they were kinda oki'sh.

- don't use enums
- use idiomatic JS (object dictionaries)

## namespace

PAST: ES2015 pre era (it was ok)
PRESENT: NOT OK

- don't use namespace
- use idiomatic JS

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

## Prefer function types instead method declaration (contravariance, bivariance)

**strictFunctionTypes:**

_Checking applies to all function types_, except those originating in method or constructor declarations.

_Methods are excluded_ specifically to ensure generic classes and interfaces (such as Array<T>) continue to mostly relate covariantly.

[more info](https://stackoverflow.com/questions/51767338/what-is-the-benefit-of-using-strictfunctiontypes-in-typescript)

Avoid:

```ts
interface Counter {
  start(value: number): string
  reset(): void
}
```

Prefer

```ts
interface Counter {
  start: (value: number) => string
  reset: () => void
}
```

## (OPTIONAL) void vs undefined

- void as function return type ignores return value (okish for NodeJS callback API's)
- void can be skipped if used as function argument

## (OPTIONAL) generics argument vs `as`

```ts
const ref = useRef<HTMLInputElement>()
```

vs

```ts
const ref = useRef<HTMLInputElement>(null)
```

vs

```ts
const ref = useRef(null as null | HTMLInputElement)
```

## (Optional) filter out falsy values from Array

```ts
type Nullable<T> = T extends null | undefined ? T : never

const isPresent = <T>(value: T): value is NonNullable<T> => value != null

const isBlank = <T>(value: T): value is Nullable<T> => value == null
```

## (Optional) Object.keys

```ts
const keys = <O>(o: O) => {
  return Object.keys(o) as (keyof O)[]
}
```

[Learn more](https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript)
