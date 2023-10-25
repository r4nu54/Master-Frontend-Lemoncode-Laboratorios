const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
console.log('Array inicial:', randomArray)

// 1. Array operations
// 1.1. Devuelva el primer elemento de un array.

const head = (newArray) => {
  const [first] = newArray
  return first
}
console.log('Ejercicio 1.1 Head:', head(randomArray))

// 1.2. Devuelva todo menos el primer elemento de un array.

const tail = (newArray) => {
  const [, ...rest] = newArray
  return rest
}
console.log('Ejercicio 1.2 Tail:', tail(randomArray))

// 1.3. Devuelva todo menos el último elemento de un array.

const init = (newArray) => {
  const copy = [...newArray]
  copy.pop()
  return copy
}
console.log('Ejercicio 1.3 Init:', init(randomArray))

// 1.4. Devuelva el último elemento de un array.

const last = (newArray) => newArray.slice(-1)
console.log('Ejercicio 1.4 Last:', last(randomArray))
