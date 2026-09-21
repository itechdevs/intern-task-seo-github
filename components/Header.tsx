import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          iTechOSNepal
        </Link>
        <nav aria-label="Main">
          <ul className="nav-list">
            <li>
              <Link href="/web/about">About Us</Link>
            </li>
            <li>
              <Link href="/onlinestore">Online Store</Link>
            </li>
            <li>
              <Link href="/web/career">Careers</Link>
            </li>
            <li>
              <Link href="/web/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
