console.log('************** DELIVERABLE 02 *********************')

const randomArray2: number[] = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
const randomArray3: number[] = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))

const concatArray = (a: number[], b: number[]): number[] => {
  return [...a, ...b]
}

console.log(concatArray(randomArray2, randomArray3))
