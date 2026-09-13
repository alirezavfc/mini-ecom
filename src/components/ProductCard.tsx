import type { Product } from "../types/index";
import { formatPrice } from "../utils/formatPrice";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{formatPrice(product.price)}</p>
      <button onClick={onAddToCart}>Add</button>
    </div>
  );
}

export default ProductCard;
