"use client";
import Image from "next/image";
import { useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
};

const startingBooks: Book[] = [
  {
    id: 1,
    title: "Hobbit",
    author: "J.R.R. Tolkien"
  },
  {
    id: 2,
    title: "Diuna",
    author: "Frank Herbert"
  }
];

function BookCard(props: Book) {
  return (
    <div className = "book-card">
      <button className="removal-button">x</button><br></br>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
    </div>
  );
}



export default function LibraryPage() {
  const [books, setBooks] = useState<Book[]>(startingBooks);
  const listBooks = books.map(book => <BookCard
  key = {book.id}
  id = {book.id}
  title = {book.title}
  author = {book.author}
  />)
  return (
    <main id = "book-cards">
      {listBooks}
    </main>
  );
}
