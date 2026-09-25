"use client";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

export default function BookDetails() {
  const params = useParams();
  const { books } = useContext(BooksContext);
  
  const currentBook = books.find(book => book.id === Number(params.id));
  if (!currentBook) {
  return <p>Book not found.</p>;
  } else return (
    <div className = "book-card">
      <p>Title: {currentBook.title}</p>
      <p>Author: {currentBook.author}</p>
      <br></br>
      <p>{currentBook.description}</p>
    </div>


  );
}