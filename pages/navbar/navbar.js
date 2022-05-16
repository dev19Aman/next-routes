import Link from "next/link";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/navbar/home">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/navbar/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
}
