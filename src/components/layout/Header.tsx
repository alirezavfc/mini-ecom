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
    <header className="sticky top-0 z-50 grid grid-cols-[auto_1fr_auto] items-center px-4 py-6 bg-gray-800 text-white">
      <div className="flex gap-6 justify-end items-center">
        <Link to="/" className="text-xl font-bold font-betania">
          ShittyKala
        </Link>
        <Navbar />
      </div>
      <input
        className="hidden md:block bg-gray-700 text-white px-4 py-2 rounded-lg outline-none mx-auto w-full max-w-sm"
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
