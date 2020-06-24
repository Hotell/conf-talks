# Talk Outline

1. [TypeScript Classes](./src/language-features/src/empty-object.ts)
1. [Factory](./src/react-tips/src/react-node.tsx)

> BACK TO SLIDES MISTER !

## TypeScript Classes

### What is a Class

```ts
class Greeter {
  // properties
  who: string
  greeting: string

  // constructor
  constructor(who: string, greeting: string) {
    this.who = who
    this.greeting = greeting
  }
  // method
  greet() {
    return `${this.greeting} ${this.who} !`
  }
}
```

```ts
/**
 * @class
 */
function Greeter(who, greeting) {
  this.who = who
  this.greeting = greeting
}
Greeter.prototype.greet = function () {
  return `${this.greeting} ${this.who} !`
}
```

### `this` problem

```ts
const greeter = new Greeter('Martin', 'Hello')

expect(greeter.greet()).toBe('Hello Martin!')
```

```ts
const greeter = new Greeter('Martin', 'Hello')
const { greet } = greeter

expect(greet()).toThrow()
```

How to fix that?

```diff
class Greeter {
-  greet() {
+  greet = () => {
    return `${this.greeting} ${this.who} !`
  }
}
```

### privacy problem

```ts
const greeter = new Greeter('Martin', 'Hello')

greeter.greeting // Hello
greeter.who // Martin
greeter.greet() // Hello Martin
```

TypeScript has our back: `private`

```diff
class Greeter {
-  private who: string
-  private greeting: string
+  private who: string
+  private greeting: string
}
```

**Compile time checks:**

```ts
// 🚨 @TsError = Property 'greeting' is private and only accessible within class 'Greeter'.
greeter.greeting // Hello
// 🚨 @TsError = Property 'who' is private and only accessible within class 'Greeter'.
greeter.who // Martin

greeter.greet() // Hello Martin
```

**Runtime checks:**

```ts
// ✅ Works - UPS
greeter.greeting // Hello
// ✅ Works - UPS
greeter.who // Martin

greeter.greet() // Hello Martin
```

**How to fix this?**

- private class properties

```diff
class Greeter {
-  private who: string
+  #who: string
}
```

### Type information

When you declare a class in TypeScript, you are actually creating multiple declarations at the same time.

- type of the **instance of the class**
- type of the **constructor function** (also called static type)

```ts
// instance type
let myVar: Greeter
myVar = new Greeter()

myVar.greet()

// constructor function type
let myVar: typeof Greeter
myVar = Greeter

const greeterInstance = new myVar()
greeterInstance.greet()

// if we import
import { Greeter } from './greeter'
```

**Importance of instance of the class type**

- Dependency injection

```ts
import type { HttpClient } from 'http-client'

class UserService(){
  constructor(httpClient: HttpClient){
     this.httpClient = httpClient
  }
  search(username:string){
    return this.httpClient.get(`/api/users/${username}`)
  }
}

// contrived injector mechanism
const userService = new UserService(new HttpClient())
```

## Factory

### What is a Factory

```ts
function Greeter(who: string, greeting: string) {
  // method
  const greet = () => {
    return `${greeting} ${who} !`
  }

  return {
    greet,
  }
}
```

### `this` problem ?

> Spoiler Alert: THERE IS NO THIS :)

```ts
const greeter = Greeter('Martin', 'Hello')

expect(greeter.greet()).toBe('Hello Martin!')

const { greet } = greeter
// ✅
expect(greet()).toBe('Hello Martin!')
```

### privacy problem ?

> No problem

```ts
const greeter = Greeter('Martin', 'Hello')

// 🚨 @TsError = Property 'greeting' is private and only accessible within class 'Greeter'.
// 🚨 Runtime Error
greeter.greeting
// 🚨 @TsError = Property 'who' is private and only accessible within class 'Greeter'.
// 🚨 Runtime Error
greeter.who

// ✅ Only public API
greeter.greet() // Hello Martin
```

### Type information

When you declare a function/factory in TypeScript, you are creating only **one type declaration**.

- type of the **constructor function** (also called static type)

```ts
// constructor function type
let myVar: typeof Greeter
myVar = Greeter

const greeterInstance = myVar()
```

**How to get instance type with same behavior as with classes?**

We can leverage tiny type gymnastics and leverage TypeScript declaration merging:

```ts
// ==========
// greeter.ts
// ==========

// 1. our factory implementation
export function Greeter(who: string, greeting: string) {}

// 2. our factory instance type
export type Greeter = ReturnType<typeof Greeter>

// ==========
// consumer.ts
// ==========
import { Greeter } from './greeter'

// instance type
let myVar: Greeter

// runtime instance
myVar = Greeter()
```

- Dependency injection

```ts
import type { HttpClient } from 'http-client'

function UserService(httpClient: HttpClient) {
  const search = (username: string) => {
    return this.httpClient.get(`/api/users/${username}`)
  }

  return {
    search,
  }
}

// contrived injector mechanism
const userService = UserService(HttpClient())
```
