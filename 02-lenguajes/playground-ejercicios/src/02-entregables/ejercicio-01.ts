console.log('************** DELIVERABLE 01 *********************')

const randomArray: number[] = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
console.log('Array inicial:', randomArray)

// Head
const head = (newArray: number[]): number => {
  const [first] = newArray
  return first
}

console.log('Ejercicio 1.1 Head:', head(randomArray))

// Tail
const tail = (newArray: number[]): number[] => {
  const [, ...rest] = newArray
  return rest
}

console.log('Ejercicio 1.2 Tail:', tail(randomArray))

// Init
const init = (newArray: number[]): number[] => {
  const copy = [...newArray]
  copy.pop()
  return copy
}

console.log('Ejercicio 1.3 Init:', init(randomArray))

// Last
const last = (newArray: number[]): number | undefined => {
  const copy = [...newArray]
  return copy.pop()
}

console.log('Ejercicio 1.4 Last:', last(randomArray))
