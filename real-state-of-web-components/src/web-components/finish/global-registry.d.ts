// Extend global namespace with custom elements
declare namespace JSX {
  interface IntrinsicElements {
    'wc-counter': { count?: number | string }
  }
}
