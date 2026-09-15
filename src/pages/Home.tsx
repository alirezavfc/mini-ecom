import { products } from "../data";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import { useState } from "react";

function Home() {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");

  const clearFilters = () => {
    setCategory("");
    setBrand("");
    setSort("");
  };

  return (
    <div className="flex gap-6 p-6">
      <FilterSidebar
        setCategory={setCategory}
        setBrand={setBrand}
        setSort={setSort}
        clearFilters={clearFilters}
        category={category}
        brand={brand}
        sort={sort}
      />
      <ProductGrid
        products={products}
        category={category}
        brand={brand}
        sort={sort}
      />
    </div>
  );
}

export default Home;
