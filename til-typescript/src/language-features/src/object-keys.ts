export const main = () => {}

const point = { x: 1, y: 2 }
type Point = typeof point

const example1 = () => {
  Object.keys(point).forEach((value) => {
    console.log(value)
    fn(value)
  })

  for (const k of Object.keys(point)) {
    // A valid call iff Object.keys(pt) returns (keyof Point)[]
    fn(k)
  }
}

const example2 = () => {
  keys(point).forEach((value) => {
    console.log(value)
    fn(value)
  })

  for (const k of keys(point)) {
    // A valid call iff Object.keys(pt) returns (keyof Point)[]
    fn(k)
  }
}

const example3properMap = () => {
  const mapPoint = new Map([['x', 1] as const, ['y', 2] as const])
  const mapKeys = [...mapPoint.keys()]
  mapKeys.forEach((value) => {
    console.log(value)
    // Always valid call as Map is strictly set
    fn(value)
  })
}

function fn(k: keyof Point) {
  if (k === 'x') {
    console.log('X axis')
  } else if (k === 'y') {
    console.log('Y axis')
  } else {
    throw new Error('This is impossible')
  }
}

const keys = <O>(o: O) => {
  return Object.keys(o) as (keyof O)[]
}
