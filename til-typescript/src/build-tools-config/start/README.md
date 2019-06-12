BEFORE:

- rename npm script tasks:

```diff
{
-"bundle": "webpack --config src/build-tools-config/finish/webpack.config.js --env development",
-"bundle:check-js": "tsc -p src/build-tools-config/finish"
+"bundle": "webpack --config src/build-tools-config/start/webpack.config.js --env development",
+"bundle:check-js": "tsc -p src/build-tools-config/start"
  }
```
