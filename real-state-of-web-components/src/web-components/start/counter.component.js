/** @typedef {{incBtn: HTMLButtonElement, decBtn: HTMLButtonElement, countView: HTMLElement}} ViewRef */

// TEMPLATE
/*
<button class="inc">👍</button>
<div class="count"></div>
<button class="dec">👎</button>
*/

// STYLES -> ⚡️THEMING !!!️️️⚡️
/*
:host {
  all: initial;
  contain: content;

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
  border-radius: var(--wc-counter-button-border-radius, 0.25em);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
}
*/

// STYLES SLOTTED
/*
::slotted(.title) {
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  width: 100%;
}
*/

class Counter extends HTMLElement {
  constructor() {
    super()

    // this.appendChild(template.content.cloneNode(true))

    // this._viewRef = /** @type {ViewRef} */ ({
    //   countView: this.querySelector('.count'),
    //   incBtn: this.querySelector('.inc'),
    //   decBtn: this.querySelector('.dec'),
    // })

    // this._viewRef.incBtn.addEventListener('click', () => {
    //   console.log('inc')
    // })
    // this._viewRef.decBtn.addEventListener('click', () => {
    //   console.log('dec')
    // })
  }

  connectedCallback() {
    console.log('Mounted')

    // 👉move to RENDER method!
    // this._viewRef.countView.textContent = '0'
  }
}
