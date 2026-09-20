import type { Product } from "../types/index";
import { formatPrice } from "../utils/formatPrice";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow-mdrounded-lg border p-4 shadow-md transition duration-300 hover:shadow-2xl hover:scale-105 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          className="w-full h-48 object-contain cursor-pointer"
          src={product.image}
          alt={product.name}
        />
        <p className="font-bold text-lg mb-5 cursor-pointer">{product.name}</p>
      </Link>
      <p className="text-sm mb-3">{formatPrice(product.price)}</p>
      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-transform duration-300 hover:scale-[1.02]"
        onClick={onAddToCart}
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
}

export default ProductCard;
