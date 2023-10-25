// 4. Read Books

const books = [
  { title: 'Devastación', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Harry Potter y la piedra filosofal', isRead: true }
]

function isBookRead(books, titleToSearch) {
  const book = books.find((book) => book.title === titleToSearch)
  return book ? book.isRead : false
}

console.log('Ejercicio 4')
console.log(isBookRead(books, 'Devastación')) // true
console.log(isBookRead(books, 'Canción de hielo y fuego')) // true
console.log(isBookRead(books, 'Los Pilares de la Tierra')) // no existe el libro
