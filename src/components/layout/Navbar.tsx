import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-6">
      <Link to="/about">درباره‌ما</Link>
    </nav>
  );
}

export default Navbar;
