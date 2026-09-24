import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
      <main>
        <h1>My Library</h1>

        <p>
          Keep track of the books you have read and write your own reviews.
        </p>

        <Link href="/library"   className="book-card">
          <br />
          Go to library
          <br />
        </Link>
      </main>
  );
}


