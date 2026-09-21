import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "iTechOS Nepal | Leading IT & Software Solutions Distributor",
  description:
    "Explore genuine software licenses, enterprise hardware, and professional IT consultation services from iTechOS Nepal, Kathmandu's trusted technology partner.",
};

export default function HomePage() {
  const featured = [products[0], products[2], products[7]];

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>Your trusted partner for technology solutions</h1>
            <p className="lead">
              iTech Office Support empowers your digital future with seamless IT
              solutions, offering top-tier products and services as a leading IT
              distributor in Nepal.
            </p>
            <div className="hero-actions">
              <Link href="/onlinestore" className="button">
                Visit the online store
              </Link>
              <Link href="/web/contact" className="button button-outline">
                Contact us
              </Link>
            </div>
          </div>
          <img
            src="/images/hero.svg"
            alt="iTechOS Nepal IT Solutions and Services Illustration"
            width={520}
            height={380}
            className="hero-image"
          />
        </div>
      </section>

      <section className="container section">
        <h2>What we do</h2>
        <div className="three-col">
          <div>
            <h3>IT solutions</h3>
            <p>
              Hardware, networking and support for offices and businesses
              across Nepal.
            </p>
          </div>
          <div>
            <h3>Software licensing</h3>
            <p>
              Genuine antivirus and security licenses, including eScan, for
              home and business users.
            </p>
          </div>
          <div>
            <h3>Enterprise technology services</h3>
            <p>
              Technical support and consultation from a team based in
              Kathmandu.
            </p>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Featured products</h2>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <p className="more-link">
          Want to see everything we sell?{" "}
          <Link href="/onlinestore">Explore our online store</Link>.
        </p>
      </section>

      <section className="container section">
        <h2>Why choose us?</h2>
        <ul className="check-list">
          <li>Fast response within 24 hours</li>
          <li>Expert IT consultation</li>
          <li>Competitive pricing</li>
          <li>After-sales support</li>
        </ul>
        <p>
          Learn more <Link href="/web/about">about our team</Link> or see{" "}
          <Link href="/web/career">current career opportunities</Link>.
        </p>
      </section>
    </>
  );
}
