export const main = () => {}

const openClosedDiff = () => {
  interface Kitten {
    purrs: boolean
  }

  interface Kitten {
    colour: string
  }

  const kitten: Kitten = { colour: 'blue', purrs: true }

  // ===============

  // In the other case a type cannot be changed outside of
  // it's declaration.

  type Puppy = {
    color: string
  }

  // 🚨 EXPECT ERROR -> "Duplicate identifier 'Puppy'"
  type Puppy = {
    toys: number
  }
}

const disjucntUnionsDiff = () => {
  type Point = {
    x: number
    y: number
  }
  type Shape = {
    area(): number
  }
  type Perimeter = {
    perimiter(): number
  }

  type RectangleShape = (Shape | Perimeter) & Point

  // NOT POSSIBLE 🚨
  interface Rectangle extends RectangleShape {}
}
