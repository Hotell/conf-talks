# CLI

## Booting TS project

```sh
tsc --init
```

```sh
tsc --init --module esnext --target esnext --moduleResolution node --sourceMap true --noEmit true --isolatedModules true --jsx preserve
```

## Resolve config

```sh
tsc --showConfig
```

```sh
tsc -p tsconfig.js.json --showConfig
```

```sh
# - Will print all files (not just files:[] like seen in showConfig)
# - filter out with grep
tsc p tsconfig.js.json --listFiles

tsc p tsconfig.js.json --traceResolution
```

## Debug

```sh
tsc --extendedDiagnostics
```

## Strange config settings

### typeRoots

> List of folders to include type definitions from

> eh?

[Explanation](https://github.com/microsoft/TypeScript/issues/22217#issuecomment-369783776)

#### Example

> providing custom module types

```json
{
  "typeRoots": ["./custom-typings"]
}
```

won't work until you add global -> `declare module 'greeter' {}`

Be explicit, and instead use `path` !

> no declare module needed

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "*": ["custom-typings/*"]
    }
  }
}
```

**What about global extensions?**

- declare `globals.d.ts` within your `include` files

**What about vendor types extension?**

- create `extended-typings` and put there all overrides. Don't forget to add it to `includes`

### types

> Type declaration files to be included in compilation.

> eh?

Explanation:

> Global type declaration module names to be included in compilation.

#### Example

> Clash of Jest and Cypress globals

_./src/tsconfig.json_

```json
{
  "compilerOptions": {
    "types": ["node", "jest"]
  }
}
```

_./cypress/tsconfig.json_

```json
{
  "compilerOptions": {
    "types": ["node", "cypress"]
  }
}
```
