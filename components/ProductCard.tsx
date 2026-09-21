import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <img src={product.image} width={320} height={200} />
      <h3>{product.name}</h3>
      <p>{product.summary}</p>
      <p className="price">
        {formatPrice(product.price)} <span>(Incl. VAT)</span>
      </p>
      <Link href={`/onlinestore/${product.id}`} className="button">
        Buy
      </Link>
    </article>
  );
}
