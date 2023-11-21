console.log('************** DELIVERABLE 05 *********************')

class slotMachine {
  private coins: number
  constructor() {
    this.coins = 0
  }

  play() {
    this.coins++
    const slot1: boolean = Math.random() >= 0.5
    const slot2: boolean = Math.random() >= 0.5
    const slot3: boolean = Math.random() >= 0.5
    if (slot1 && slot2 && slot3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`)
      this.coins = 0
    } else {
      console.log('Good luck next time!!')
    }
  }
}

const machine = new slotMachine()
machine.play()
machine.play()
machine.play()
machine.play()
machine.play()
