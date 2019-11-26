# CLI

## Booting TS project

```sh
# yarn w:cli tsc
tsc --init
```

## Booting TS project with flags

```sh
#
tsc --init --module esnext --target esnext --moduleResolution node --sourceMap true --noEmit true --isolatedModules true --jsx preserve
```

## Resolve config

```sh
# yarn w:cli tsc --showConfig
tsc --showConfig
```

```sh
# yarn w:cli tsc -p tsconfig.js.json --showConfig
tsc -p tsconfig.js.json --showConfig
```

## Resolve compiled files

```sh
# - Will print all files (not just files:[] like seen in showConfig)
# - filter out with grep
#
# yarn w:cli tsc -p tsconfig.js.json
tsc -p tsconfig.js.json --listFiles

# MORE Advanced!
tsc -p tsconfig.js.json --traceResolution
```

## Debug

```sh
# yarn w:cli tsc --extendedDiagnostics
tsc --extendedDiagnostics
```

## Strange config settings

### typeRoots

> "List of folders to include type definitions from"

> eh? 🤷‍♂️🤯 ???!!!

**[Explanation](https://github.com/microsoft/TypeScript/issues/22217#issuecomment-369783776)**

- ✅List of folders to include GLOBAL type definitions from

#### Example

##### providing custom module types

```json
{
  "typeRoots": ["./custom-typings"]
}
```

Won't work until you add global -> `declare module 'greeter' {}`

Be explicit -> use `path` instead !

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

##### What about global extensions?

- declare `globals.d.ts` within your `include` files

##### What about vendor types extension?

- create `extended-typings` and put there all overrides. Don't forget to add it to `includes`

### types

> "Type declaration files to be included in compilation."

> eh? 🤷‍♂️🤯 ???!!!

**Explanation:**

- ✅Global type declaration module names to be included in compilation.

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

_./tsconfig.no-globals.json_

```json
{
  "compilerOptions": {
    "types": []
  }
}
```
