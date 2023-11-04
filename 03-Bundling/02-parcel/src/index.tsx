import React from 'react'

import { createRoot } from 'react-dom/client'
import { ByeComponent } from './bye.component'
import { HelloComponent } from './hello.component'

const root = createRoot(document.getElementById('root'))

root.render(
  <div>
    <HelloComponent />
    <ByeComponent />
  </div>
)

// import './mystyles.scss'

// import logoImg from './content/logo_1.png'

// const user = 'John Doe'

// console.log(`Hello ${user}`)

// const img = document.createElement('img')
// img.src = logoImg

// document.getElementById('imgContainer').appendChild(img)

// const numberA: number = 2
// const numberB: number = 3

// console.log(numberA + numberB)
