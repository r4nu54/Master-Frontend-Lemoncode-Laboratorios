// 5. Slot Machine

class SlotMachine {
  constructor() {
    this.coins = 0
  }

  play() {
    this.coins++
    console.log('New game!!!')
    const random1 = Math.random() >= 0.5
    console.log('Slot1:', random1)
    const random2 = Math.random() >= 0.5
    console.log('Slot2:', random2)
    const random3 = Math.random() >= 0.5
    console.log('Slot3:', random3)
    if (random1 && random2 && random3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`)
      this.coins = 0
    } else {
      console.log('Good luck next time!!')
    }
  }
}

console.log('Ejercicio 5')
const machine1 = new SlotMachine()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
machine1.play()
