import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 dir="ltr" className="text-3xl font-bold">
        Oops! Error 404!
      </h1>

      <p className="text-gray-500">صفحه‌ی مورد نظر یافت نشد!</p>

      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
      >
        بازگشت به فروشگاه
      </Link>
    </div>
  );
}

export default NotFound;
