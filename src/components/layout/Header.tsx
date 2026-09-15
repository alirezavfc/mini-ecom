import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../hooks/useCart";

function Header() {
  const { cart } = useCart();

  return (
    <header className="grid grid-cols-[auto_1fr_auto] items-center px-4 py-6 bg-gray-800 text-white">
      <div className="flex gap-6 justify-end items-center">
        <Link to="/" className="text-xl font-bold font-betania">
          ShittyKala
        </Link>
        <Navbar />
      </div>
      <input
        className="hidden md:block bg-gray-700 text-white px-4 py-2 rounded-lg outline-none mx-auto w-full max-w-sm"
        placeholder="جستجو..."
      />
      <Link to="/cart">
        <ShoppingCart />
        <span>{cart.length}</span>
      </Link>
    </header>
  );
}

export default Header;
