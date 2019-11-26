export const main = () => {
  // Avoid

  interface CounterBivariance {
    start(value: number): string
    reset(): void
  }

  const counterMethod: CounterBivariance = {
    start(val) {
      return ''
    },
    reset() {}
  }

  // Prefer

  interface CounterContra {
    start: (value: number) => string
    reset: () => void
  }

  const counterFunc: CounterContra = {
    start(val) {
      return ''
    },
    reset() {}
  }
}
