// 3. Clone Merge

const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' }
const b = { name: 'Luisa', age: 31, married: true }

// 3.1. Clone

const clone = (source) => ({ ...source })
console.log('Ejercicio 3.1:', clone(a))

// 3.2. Merge

const merge = (source, target) => ({ ...target, ...source })
console.log('Ejercicio 3.2:', merge(a, b))
