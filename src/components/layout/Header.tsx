import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";
import { useSearch } from "../../hooks/useSearch";

function Header() {
  const { cart } = useCart();
  const { search, setSearch } = useSearch();
  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <header className="sticky top-0 z-50 flex flex-col gap-4 px-4 py-4 bg-gray-800 text-white md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:py-6">
      <div className="flex items-center justify-between md:justify-end md:gap-6">
        <Link to="/" className="text-xl font-bold font-betania">
          ShittyKala
        </Link>
        <Navbar />
      </div>
      <input
        className="md:block bg-gray-700 text-white px-4 py-2 rounded-lg outline-none mx-auto w-full max-w-sm"
        placeholder="جستجو..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to="/cart">
        <ShoppingCart />
        <span>{totalItems}</span>
      </Link>
    </header>
  );
}

export default Header;
