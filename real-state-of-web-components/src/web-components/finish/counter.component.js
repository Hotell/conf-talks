/** @typedef {{incBtn: HTMLButtonElement, decBtn: HTMLButtonElement, countView: HTMLElement}} ViewRef */

const template = document.createElement('template')
template.innerHTML = `
  <style>
    :host {
      contain: content;
      all: initial;
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
      border-radius: var(--wc-counter-button-border-radius, 0.25em);
      box-shadow: 0px 0px 5px 1px rgba(0,0,0,.5);
      padding: 1.5rem;
    }

    ::slotted(.title) {
      text-align: center;
      text-transform: uppercase;
      font-size: 1rem;
      width: 100%;
    }
  </style>
  <slot></slot>
  <button class="inc">👍</button>
  <div class="count"></div>
  <button class="dec">👎</button>
`

export class Counter extends HTMLElement {
  /**
   * @returns {['count']}
   */
  static get observedAttributes() {
    return ['count']
  }

  _count = 0

  get count() {
    return this._count
  }

  set count(val) {
    this._count = val
    this.render()
  }

  handleDec = () => {
    this.count = this.count - 1
  }

  handleInc = () => {
    this.count = this.count + 1
  }

  /**
   * @param {typeof Counter['observedAttributes'][number]} attrName
   * @param {unknown} oldVal
   * @param {unknown} newVal
   */
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log(`Attribute "${attrName}" changed to: ${newVal}`)

    if (attrName === 'count' && oldVal !== newVal) {
      this.count = Number(newVal)
    }
  }

  constructor() {
    super()

    this._root = this.attachShadow({ mode: 'open' })

    this._root.appendChild(template.content.cloneNode(true))

    this._viewRef = /** @type {ViewRef}*/ ({
      incBtn: this._root.querySelector('.inc'),
      decBtn: this._root.querySelector('.dec'),
      countView: this._root.querySelector('.count'),
    })

    this._viewRef.incBtn.addEventListener('click', this.handleInc)
    this._viewRef.decBtn.addEventListener('click', this.handleDec)
  }

  connectedCallback() {
    this.render()
  }

  disconnectedCallback() {
    this._viewRef.incBtn.removeEventListener('click', this.handleInc)
    this._viewRef.decBtn.removeEventListener('click', this.handleDec)
  }

  render() {
    this._viewRef.countView.textContent = String(this.count)
  }
}

export const registerElement = (registryName = 'wc-counter') => {
  customElements.define(registryName, Counter)
}
