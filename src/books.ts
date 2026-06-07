export type Book = {
  title: string
  author: string
  year: number
}

export const books: Book[] = [
  { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
  { title: 'Преступление и наказание', author: 'Фёдор Достоевский', year: 1866 },
  { title: '1984', author: 'Джордж Оруэлл', year: 1949 },
]

export function printBookTitles(books: Book[]) {
  for (let i = 0; i < books.length; i++) {
    console.log(books[i].title)
  }
}

printBookTitles(books)
