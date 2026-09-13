import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Provides easy access to cart context.
export function useCart() {
  const context = useContext(CartContext);

  // Prevents using the hook outside CartProvider.
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
