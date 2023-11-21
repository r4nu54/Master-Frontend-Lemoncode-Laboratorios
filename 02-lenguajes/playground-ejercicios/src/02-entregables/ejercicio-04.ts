console.log('************** DELIVERABLE 04 *********************')

// Read Books

type Book = {
  title: string
  isRead: boolean
}

const books: Book[] = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true }
]

const isBookRead = (books: Book[], titleToSearch: string): boolean => {
  const book = books.find((book) => book.title === titleToSearch)
  return book ? book.isRead : false
}

console.log(isBookRead(books, 'Devastación'))
console.log(isBookRead(books, 'Canción de hielo y fuego'))
console.log(isBookRead(books, 'Los Pilares de la Tierra'))
