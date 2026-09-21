import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-title">iTechOSNepal</h2>
          <p>
            Your trusted partner for IT solutions, software licensing, and
            enterprise technology services in Nepal.
          </p>
          <ul className="social-list">
            <li>
              <a href="https://facebook.com/itechosnepal">Facebook</a>
            </li>
            <li>
              <a href="https://linkedin.com/company/itechosnepal">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/itechosnepal">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com/itechosnepal">Instagram</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li>
              <Link href="/web/about">About Us</Link>
            </li>
            <li>
              <Link href="/web/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/onlinestore">Online Store</Link>
            </li>
            <li>
              <a href="https://kaamhubs.com">Join iTech</a>
            </li>
          </ul>
          <h3 className="footer-heading">Legal</h3>
          <ul>
            <li>
              <Link href="/web/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/web/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-heading">Contact Us</h3>
          <address>
            Kumari Club, Balkhu
            <br />
            Kathmandu, Nepal 44600
            <br />
            <a href="tel:+97714334802">+977-01-4334802</a> |{" "}
            <a href="tel:+97714334319">+977-01-4334319</a>
            <br />
            <a href="mailto:info@itechosnepal.com">info@itechosnepal.com</a>
          </address>
        </div>
      </div>
    </footer>
  );
}
