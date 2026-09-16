import { useState, type ReactNode } from "react";
import { SearchContext } from "./SearchContext";

// Defines the props accepted by SearchProvider.
interface SearchProviderProps {
  children: ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider> // Provide search state to child components
  );
}
