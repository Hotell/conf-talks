# Live Coding

## initial setup

**index.html**

```html
<style>
  html,
  body {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    background-color: rebeccapurple;
    color: azure;
    border: 2px solid #66339991;
    font-size: 2rem;
    border-radius: 0.5em;
    box-shadow: 1px 0px 10px #66339991;
  }
  /* :root {
      --wc-counter-button-bg-color: #333;
      --wc-counter-button-border-radius: 50%;
    } */
</style>
```

**counter styles**

```css
:host {
  /* reset dom piercing styles */
  all: initial;
  /* perf - limit scope of styles */
  contain: content;

  /* regular css */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-width: 80%;
}

:host * {
  font-size: 1.5rem;
}

button {
  background-color: var(--wc-counter-button-bg-color, #eee);
  padding: 1.5rem;
  border-radius: var(--wc-counter-button-border-radius, 0.25em);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
}

::slotted(.title) {
  text-align: center;
  width: 100%;
}
```

## Build Custom Element

### 1. step

```js
class Counter extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    console.log('Im connected')
  }
  disconnectedCallback() {
    console.log('bye!')
  }
}

customElements.define('wc-counter', Counter)
```

### 2. step - define template

```js
const template = document.createElement('template')
template.innerHTML = `
  <button class="inc">👍</button>
  <div class="count"></div>
  <button class="dec">👎</button>
`

class Counter extends HTMLElement {
  constructor() {
    super()
    this.appendChild(template.content.cloneNode(true))
  }
}
```

### 3. get dom refs

```js
this.viewRef = /** @type {ViewRef} */ ({
  incBtn: this.querySelector('.inc'),
  decBtn: this.querySelector('.dec'),
  countView: this.querySelector('.count'),
})
```

### 4. register listeners

```js
class Counter extends HTMLElement {
  constructor() {
    this.viewRef.incBtn.addEventListener('click', () => {
      console.log('inc')
    })
    this.viewRef.decBtn.addEventListener('click', () => {
      console.log('dec')
    })
  }
}
```

### 5. create render()

```js
render() {
  this.viewRef.countView.textContent = '0'
}

connectedCallback(){
  this.render()
}
```

### 6. register state -> count prop

```js
_count = 0

get count() {
  return this._count
}
set count(val) {
  this._count = val
  this.render()
}
```

**🚨NOTE!!! - UPDATE RENDER 🚨**

```js
render() {
  this.viewRef.countView.textContent = this.count
}
```

### 7. declarative html -> count attribute

```js
static get observedAttributes() {
  return ['count']
}

/**
 * @param {string} name
 * @param {string} oldVal
 * @param {string} newVal
 */
attributeChangedCallback(name, oldVal, newVal) {
  if (name === 'count') {
    this.count = Number(newVal)
  }
}
```

### 8. add Shadow DOM

```js
this.root = this.attachShadow({ mode: 'open' })

this.root.appendChild(template.content.cloneNode(true))

this.viewRef = /** @type {ViewRef} */ ({
  incBtn: this.root.querySelector('.inc'),
  decBtn: this.root.querySelector('.dec'),
  countView: this.root.querySelector('.count'),
})
```

### 9. add scoped CSS + theming support

```html
<style>
  :host {
    /* reset dom piercing styles */
    all: initial;
    /* perf - limit scope of styles */
    contain: content;

    /* regular css */
    display: flex;
    padding: 0.25rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    max-width: 80%;
  }

  :host * {
    font-size: 1.5rem;
  }

  button {
    background-color: var(--wc-counter-button-bg-color, #eee);
    padding: 1.5rem;
    border-radius: var(--wc-counter-button-border-radius, 0.25em);
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  }
</style>
```

### 10. theme our component

```css
:root {
  --wc-counter-button-bg-color: #333;
  --wc-counter-button-border-radius: 50%;
}
```

### 11. add composition via projection

```html
<wc-counter count="100">
  <b class="title">hello</b>
</wc-counter>
```

```html
<slot></slot>
```

```css
::slotted(.title) {
  text-align: center;
  width: 100%;
}
```

### 12. showcase interop with React
