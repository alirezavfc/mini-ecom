import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Cart() {
  const { cart, addToCart, removeFromCart, getTotalCartPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-3xl font-bold">سبد خرید شما خالی است</h1>
        <p className="text-gray-500">
          هنوز محصولی به سبد خرید اضافه نکرده‌اید.
        </p>

        <Link
          to="/"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalPrice = getTotalCartPrice();

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-3">
      {/* Cart Products */}
      <div className="space-y-4 md:col-span-2">
        <h1 className="text-3xl font-bold">سبد خرید</h1>

        {cart.map((item) => (
          <div
            key={item.product.id}
            className="flex flex-col gap-5 rounded-xl p-5 shadow-lg sm:flex-row sm:items-center"
          >
            {/* Product Image */}
            <div className="flex justify-center sm:w-40 sm:shrink-0">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-32 w-32 object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <h2 className="text-xl font-bold">{item.product.name}</h2>

              <p className="text-lg font-semibold text-blue-600">
                {item.product.price}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-xl font-bold transition-colors hover:bg-gray-300"
                >
                  −
                </button>

                <span className="min-w-8 text-center text-lg font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => addToCart(item.product)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white transition-colors hover:bg-blue-700"
                >
                  +
                </button>
              </div>
            </div>

            {/* Product Total */}
            <p className="font-semibold sm:self-start">
              {item.product.price * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="h-fit rounded-xl p-6 shadow-lg md:sticky md:top-6">
        <h2 className="mb-6 text-2xl font-bold">خلاصه سفارش</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>تعداد کالا</span>
            <span className="font-semibold">{totalItems}</span>
          </div>

          <div className="flex justify-between border-t pt-4">
            <span>مجموع قیمت</span>
            <span className="font-bold">{totalPrice}</span>
          </div>
        </div>

        <Link
          to="/"
          className="mt-6 block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
        >
          ثبت سفارش
        </Link>
      </div>
    </div>
  );
}

export default Cart;
