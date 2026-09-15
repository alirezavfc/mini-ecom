import type { Product } from "../types/index";
import { formatPrice } from "../utils/formatPrice";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-mdrounded-lg border p-4 shadow-md transition duration-300 hover:shadow-2xl hover:scale-105 flex flex-col">
      <img
        className="w-full h-48 object-contain"
        src={product.image}
        alt={product.name}
      />
      <p className="font-bold text-lg mb-5">{product.name}</p>
      <p className="text-sm mb-3">{formatPrice(product.price)}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={onAddToCart}
      >
        Add
      </button>
    </div>
  );
}

export default ProductCard;
