/** @typedef {{incBtn: HTMLButtonElement, decBtn: HTMLButtonElement, countView: HTMLElement}} ViewRef */

class Counter extends HTMLElement {
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

  disconnectedCallback() {
    console.log('Unmounted')
  }
}
