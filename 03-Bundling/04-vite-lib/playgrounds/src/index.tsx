// import { mapCollection } from '@lemoncode/common-library'

// const collection = [1, 2, 3]
// const result = mapCollection(collection, (x) => x * 2)
// console.log(result)

import { createRoot } from 'react-dom/client'
import '@ranusa/common-library/style.css'
import { Button } from '@ranusa/common-library'

const root = createRoot(document.getElementById('root')!)
root.render(<Button />)
