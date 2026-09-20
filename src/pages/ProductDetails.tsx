import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import { products } from "../data";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatPrice";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();
  if (!product) {
    return <NotFound />; // or:   return <Navigate to="*" />;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="bg-slate-700 text-white my-4 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
      >
        بازگشت به صفحه ی قبلی
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 rounded-4xl  p-5 shadow-2xl">
          <h1 className="text-4xl font-bold">
            {product.brand} {product.name}
          </h1>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-contain"
          />
          <p className="text-2xl mb-3">قیمت: {formatPrice(product.price)}</p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            افزودن به سبد خرید
          </button>
        </div>

        <div className="my-auto">
          <h2 className="text-2xl font-semibold my-auto">مشخصات محصول</h2>

          <div className="divide-y">
            <p className="flex justify-between py-3">
              <span className="text-gray-500">برند سازنده</span>
              <span className="font-medium">{product.brand}</span>
            </p>

            <p className="flex justify-between py-3">
              <span className="text-gray-500">دسته‌بندی کالا</span>
              <span className="font-medium">{product.category}</span>
            </p>

            <p className="flex justify-between py-3">
              <span className="text-gray-500">سایز صفحه نمایش (اینچ)</span>
              <span className="font-medium">{product.screenSize}</span>
            </p>

            <p className="flex justify-between py-3">
              <span className="text-gray-500">سیستم‌عامل</span>
              <span className="font-medium">{product.os}</span>
            </p>

            <p className="flex justify-between py-3">
              <span className="text-gray-500">سال ساخت</span>
              <span className="font-medium">{product.year}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
