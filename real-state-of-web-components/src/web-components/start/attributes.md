```js
class Counter {
  static get observedAttributes() {
    return ['count']
  }

  /**
   *
   * @param {string} attrName
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'count') {
      this.count = Number(newVal)
    }
  }
}
```
