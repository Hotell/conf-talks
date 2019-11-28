export const main = () => {
  interface Animal {
    type: string
  }

  interface Dog extends Animal {
    bark: () => void
  }

  interface AnimalManager<T> {
    // Avoid 🚨
    compare(a: T, b: T): number
    // Prefer ✅
    // compare: (a: T, b: T) => number
  }

  const dogManager: AnimalManager<Dog> = {
    compare: (a, b) => {
      return 1
    }
  }

  const animalManager: AnimalManager<Animal> = dogManager
}
