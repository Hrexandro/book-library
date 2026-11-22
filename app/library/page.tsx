"use client";
import Image from "next/image";
import { useState } from "react";
import { useContext } from "react";
import { BooksContext, type Book } from "../context/BooksContext";
import Link from "next/link";
import { filterBooks } from "../utils/filterBooks";
import { supabase } from "../utils/supabase";


function BookCard(props: Book) {
  const { deleteBook } = useContext(BooksContext);
  const coverUrl = props.coverPath
  ? supabase.storage.from("book-covers").getPublicUrl(props.coverPath).data.publicUrl
  : null;
  return (
    <div className = "book-card">
      <button className="removal-button" onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (confirm("Are you sure you want to delete this book?")) {
            deleteBook(props.id);
          }
      }}>x</button><br></br>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <Link href={`/library/${props.id}`} >
      {coverUrl && (
        <Image
          src={coverUrl}
          alt={`Cover of ${props.title}`}
          width={120}
          height={170}
          className="book-cover"
        />
      )}
      </Link>
    </div>
  );
}



export default function LibraryPage() {
  const { books } = useContext(BooksContext);
  const [query, setQuery] = useState("");

  const searchText = query.trim().toLowerCase();

  const filteredBooks = filterBooks(books, query);
  const listBooks = filteredBooks.map(book => <BookCard
  key = {book.id}
  id = {book.id}
  title = {book.title}
  author = {book.author}
  description={book.description}
  coverPath={book.coverPath}
  />)
  return (
    <>
      <input
        id="book-search"
        type="search"
        placeholder="Search by title or author..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

    <div id="book-cards">
      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        listBooks
      )}
    </div>
    </>
  );
}
