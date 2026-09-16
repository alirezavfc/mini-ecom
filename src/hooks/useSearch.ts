import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

// Provides easy access to search context.
export function useSearch() {
  const context = useContext(SearchContext);

  // Prevents using the hook outside SearchProvider.
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }

  return context;
}

//createContext → Context را می‌سازد
// Provider → مقدار را می‌دهد
// useContext → مقدار را می‌گیرد
// useSearch → استفاده از useContext را راحت می‌کند
