console.log('************** DELIVERABLE 03 *********************')

type Person = {
  name: string
  age?: number
  surname?: string
  country?: string
  married?: boolean
}

const a: Person = { name: 'Maria', surname: 'Ibañez', country: 'SPA' }
const b: Person = { name: 'Luisa', age: 31, married: true }

// Clone
const clone = (source: Person): {} => {
  const result = { ...source }
  return result
}

console.log(clone(a))

// Merge
const merge = (source: Person, target: Person) => {
  const result: Person = { ...target, ...source }
  return result
}

console.log(merge(a, b))
