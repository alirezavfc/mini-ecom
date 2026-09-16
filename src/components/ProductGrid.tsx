import type { Product } from "../types/index";
import ProductCard from "./ProductCard";
import { useCart } from "../hooks/useCart";
import { useSearch } from "../hooks/useSearch";

interface ProductGridProps {
  products: Product[];
  category: string;
  brand: string;
  sort: string;
}

function ProductGrid({ products, category, brand, sort }: ProductGridProps) {
  const { addToCart } = useCart();
  const { search } = useSearch();

  const filteredProducts = products.filter(
    (product) =>
      (category === "" || product.category === category) &&
      (brand === "" || product.brand === brand),
  );

  const searchedProduct = filteredProducts.filter(
    (product) =>
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const sortedProducts = [...searchedProduct];

  switch (sort) {
    case "ascending":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case "descending":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
