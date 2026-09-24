import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
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
    </aside>
  );
}


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