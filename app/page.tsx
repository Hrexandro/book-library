import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
      <main>
        <h1>My Library</h1>

        <p>
          Keep track of the books you have read and write your own reviews.
        </p>

        <Link href="/library"   className="primary-button rounded bg-black px-6 py-3 text-white">
          Go to library
        </Link>
      </main>
  );
}


