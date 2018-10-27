## setup TS

`yarn tsc --init --outDir dist --sourceMap --jsx react --module ESNext --lib dom,es2015 --moduleResolution node --forceConsistentCasingInFileNames --skipLibCheck`

## setup folder structure

`mkdir src && touch src/{index.html,main.ts,styles.css}`

## setup test structure

`touch jest.config.js src/app/setup-tests.ts`

## setup e2e-test structure

`mkdir -p e2e/{pages,tests,utils} && touch tsconfig.json pages/index.ts utils/index.ts`

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "target": "es2015",
    "noEmit": true
  },
  "include": ["."]
}
```
