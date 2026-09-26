"use client";
import Image from "next/image";
import { useState } from "react";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import Link from "next/link";

type Book = {
  id: number;
  title: string;
  author: string;
};


function BookCard(props: Book) {
  const { deleteBook } = useContext(BooksContext);
  return (
    <div className = "book-card">
      <button className="removal-button" onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (confirm("Are you sure you want to delete this book?")) {
            deleteBook(props.id);
          }
      }}>x</button><br></br>
      <Link href={`/library/${props.id}`} >
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      </Link>
    </div>
  );
}



export default function LibraryPage() {
  const { books } = useContext(BooksContext);
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
