import type { Book } from "../context/BooksContext";

export function filterBooks(books: Book[], query: string): Book[] {
  const searchText = query.trim().toLowerCase().replace(/\s+/g, " ");

  return books.filter(book =>
    book.title.toLowerCase().includes(searchText) ||
    book.author.toLowerCase().includes(searchText)
  );
}