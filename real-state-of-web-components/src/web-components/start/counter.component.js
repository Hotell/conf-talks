/** @typedef {{incBtn: HTMLButtonElement, decBtn: HTMLButtonElement, countView: HTMLElement}} ViewRef */

class Counter extends HTMLElement {
  static get observedAttributes() {
    return []
  }

  constructor() {
    super()

    // this.appendChild(template.content.cloneNode(true))

    // this.viewRef = /** @type {ViewRef} */ ({
    //   countView: this.querySelector('.count'),
    //   incBtn: this.querySelector('.inc'),
    //   decBtn: this.querySelector('.dec'),
    // })

    // this.viewRef.incBtn.addEventListener('click', () => {
    //   console.log('inc')
    // })
    // this.viewRef.decBtn.addEventListener('click', () => {
    //   console.log('dec')
    // })

    // RENDER!
    // this.viewRef.countView.textContent = '0'
  }

  connectedCallback() {
    console.log('Mounted')
  }

  /**
   *
   * @param {'count'} attrName
   * @param {string} oldVal
   * @param {string} newVal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    // if (attrName === 'count') {
    //   this.count = Number(newVal)
    // }
  }

  disconnectedCallback() {
    console.log('Unmounted')
  }
}
