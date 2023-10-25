// 2. Concat
const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
const randomArray2 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
console.log('Array inicial 1', randomArray)
console.log('Array inicial 2', randomArray2)

const concat = (a, b) => [...a, ...b]
console.log('Ejercicio 2:', concat(randomArray, randomArray2))
