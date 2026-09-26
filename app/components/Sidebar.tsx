"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, type SyntheticEvent} from "react";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";


export default function Sidebar() {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBook } = useContext(BooksContext);
  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const added = addBook(title, author);
    if (added){
      setTitle("");
      setAuthor("");
    }
  }

  return (
    <aside className="sidebar">
      <div className="logo">
        <Image
          src="/book.png"
          alt="Books"
          width={55}
          height={55}
          className="book-icon"
        />

        <div className="logo-text">
          MY<br />
          LIBRARY
        </div>
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/library">Library</Link>
      </nav>
      {pathname === "/library" && (
        <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-field">
            <input className="area" value={title} type='text' id="title-area" required onChange={(event) => setTitle(event.target.value)}/>
            <span className="placeholder" id="title-placeholder">New book title</span>
            </div>
            <br/>
            <br/>
            <div className="form-field">
            <input className="area" value={author} type='text' id="author-area" required onChange={(event) => setAuthor(event.target.value)}/>
            <span className="placeholder" id="author-placeholder">Author</span>
            </div>
            <br/>
            <button id="new" type="submit">New Book</button><br></br>
        </form>
      )}
    </aside>
  );
}

////maxlength="34"
