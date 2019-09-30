class FancyButton extends HTMLButtonElement {}
customElements.define('wc-fancy-button', FancyButton, { extends: 'button' })

// autonomous custom elements
class AFancyButton extends HTMLElement {}
customElements.define('wc-fancy-button', AFancyButton)
