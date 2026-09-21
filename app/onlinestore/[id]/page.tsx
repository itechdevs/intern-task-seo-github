import Link from "next/link";
import { notFound } from "next/navigation";
import { formatPrice, getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div className="container page product-detail">
      <img src={product.image} width={480} height={300} />
      <div>
        <h1>{product.name}</h1>
        <p className="price">
          {formatPrice(product.price)} <span>(Incl. VAT)</span>
        </p>
        <p>{product.description}</p>
        <p>
          <Link href="/onlinestore">Back to Online Store</Link>
        </p>
      </div>
    </div>
  );
}
