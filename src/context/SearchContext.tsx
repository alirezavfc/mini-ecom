import { createContext } from "react";

// Define the context value type
interface SearchContextType {
  search: string;
  setSearch: (value: string) => void;
}

// Create the search context
export const SearchContext = createContext<SearchContextType | undefined>(
  undefined,
);
// undefined → مقدار اولیه Context است؛ قبل از اینکه Provider مقدار واقعی را بدهد.
