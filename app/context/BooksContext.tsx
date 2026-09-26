"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";

export type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
};

type BooksContextType = {
  books: Book[];
  addBook: (title: string, author: string) => boolean;
  deleteBook: (id: number) => void;
  updateDescription: (id: number, newDescription: string) => void;
};

export const BooksContext = createContext<BooksContextType>({
  books: [],
  addBook: () => false,
  deleteBook: () => {},
  updateDescription: () => {}
});

const startingBooks: Book[] = [
  {
    id: 1,
    title: "Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo Baggins enjoys a quiet life until the wizard Gandalf sends him on an unexpected journey with a company of dwarves. Their goal is to reclaim their homeland and treasure from the dragon Smaug."
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    description: "Paul Atreides moves with his family to Arrakis, a harsh desert planet and the only source of the valuable spice melange. Political intrigue, betrayal and conflict draw him into the struggle for control of the planet."
  }
];

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<Book[]>(startingBooks);

  
  function addBook(title: string, author: string) {

    const bookExists = books.some(
    book => (book.title.trim().toLowerCase() === title.trim().toLowerCase() &&
    book.author.trim().toLowerCase() === author.trim().toLowerCase()
    ));

    if (bookExists){
      window.alert("Book already exists");
      return false;
    } else {
      const newBook: Book = {
      id: Date.now(),
      title: title,
      author: author,
      description: ""
      };
      setBooks(previousBooks => [...previousBooks, newBook]);
      return true
    }

  }
  

  function deleteBook(id: number) {
  setBooks(previousBooks =>
      previousBooks.filter(book => book.id !== id)
  );
  }

  function updateDescription(id: number, newDescription: string){
      setBooks(previousBooks =>
          previousBooks.map(book =>
              book.id === id
                  ? { ...book, description: newDescription }
                  : book
      ));
  }

  return (
    <BooksContext.Provider value={{ books, addBook, deleteBook, updateDescription }}>
      {children}
    </BooksContext.Provider>
  );
}