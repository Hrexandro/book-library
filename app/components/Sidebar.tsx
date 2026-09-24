"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();




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
        <form>
            <input className="area" type='text' id="title-area" required></input>
            <span className="placeholder" id="title-placeholder">Book title</span>
            <br/>
            <br/>
            <input className="area" type='text' id="author-area" required></input>
            <span className="placeholder" id="author-placeholder">Author</span>
            <br/>
            <button id="new">New Book</button><br></br>
        </form>
      )}
    </aside>
  );
}

////maxlength="34"
