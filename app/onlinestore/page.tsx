import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  description: "Your trusted partner for technology solutions",
};

export default function OnlineStorePage() {
  const sorted = [...products].sort((a, b) => a.price - b.price);

  return (
    <div className="container page">
      <h1>Online Store</h1>
      <p className="lead">
        Sensors, switches and antivirus licenses. All prices include VAT.
      </p>
      <div className="product-grid">
        {sorted.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
