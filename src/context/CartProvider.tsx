import { useState, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { CartItem } from "../types/index";
import type { Product } from "../types/index";

// Defines the props accepted by CartProvider.
interface CartProviderProps {
  children: ReactNode;
}

// Provides cart state to all child components.
export function CartProvider({ children }: CartProviderProps) {
  // Stores the current cart items.
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        return prevCart.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }

      return [
        ...prevCart,
        {
          product,
          quantity: 1,
        },
      ];
    });
  }
  function removeFromCart(productId: number) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === productId,
      );

      if (!existingItem) {
        return prevCart;
      }

      if (existingItem.quantity > 1) {
        return prevCart.map((item) => {
          if (item.product.id === productId) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        });
      } else {
        return prevCart.filter((item) => item.product.id !== productId);
      }
    });
  }
  function getTotalCartPrice() {
    return cart.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }
  return (
    // Makes cart data available through the context.
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
