import { createContext } from "react";
import type { CartItem, Product } from "../types/index";

// Defines the data shared through the cart context.
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  getTotalCartPrice: () => number;
}

// Creates the cart context.
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
