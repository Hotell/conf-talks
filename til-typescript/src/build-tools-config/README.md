### Strictly typed project configurations and beyond

We have here some app, that should do following:

1. greeting someone in DEV mode
2. logging turned off in PROD mode

We're using webpack as bundler.

- Let's take a look at our app files
- Let's take a look at our webpack config

All looks good! Let's bundle it!

```sh
yarn bundle
```

Ups, the world exploded ! 💣💣💣💣💣💣

**TYPESCRIPT TO THE RESCUE**

### 1. configure `tsconfig.json`

```json
{
  "compilerOptions": {
    "allowJs": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["./app", "webpack.config.js"]
}
```

### 2. fix webpack

- add `@ts-check` to webpack

💣 ERROOOOOOORZZZZZ....

- add type definitions

```sh
yarn add -D @types/{webpack,node@8}
```

- add missing `const path = require('path')`

- annotate webpack function

```js
/**
 * @param {'production' | 'development'} env
 */
```

- annotate webpack config constant

```js
/**
 * @type {import('webpack').Configuration}
 */
const config = {}
```

- run `yarn bundle`

✅ webpack fixed

### 3. strictly type JS app

- create `types.d.ts`

- extend `NODE_ENV` to strictly defined literals

```ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
    }
  }
}

export {}
```

- add our `types.d.ts` to `tsconfig`

```json
{
  "include": ["./app", "webpack.config.js", "./types.d.ts"]
}
```

- use our extended NODE_ENV within `webpack.config.js`

```diff
/**
- * @param {'development' | 'production'} env
+ * @param {NodeJS.ProcessEnv['NODE_ENV']} env
 */
```

3.1 enable type checking via `// @ts-check`

3.1.1 `environment.js`

You can see the typo now! thanks to TS.

> Thanks to our augmented NODE_ENV we have now strict literals checks! SAFE ENVIRONMENT FOR EVERYONE !

```diff
-process.env.NODE_ENV === 'development '
+process.env.NODE_ENV === 'development'
```

3.1.2 `greeter.js`

```js
// @ts-check

/**
 * @param {string} greeting
 * @param {string} who
 */
export function greet(greeting, who) {
  return `${greeting} ${who}!`
}
```

3.1.3 `logger.js`

```js
// @ts-check
export class Logger {
  /**
   * @param {boolean} enable
   */
  constructor(enable) {
    this._enable = enable
  }

  /**
   * @param {unknown[]} args
   */
  log(...args) {
    this._enable && console.log(...args)
  }
}
```

3.1.4 `main.js`
// @ts-check

3.2 remove all `// @ts-check` and enable it within `tsconfig`

```json
{
  "checkJs": true
}
```

---

TALK END ✅
