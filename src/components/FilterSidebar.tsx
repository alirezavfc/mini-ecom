interface FilterSidebarProps {
  setCategory: (category: string) => void;
  setBrand: (brand: string) => void;
  setSort: (sort: string) => void;
  clearFilters: () => void;
  category: string;
  brand: string;
  sort: string;
}

function FilterSidebar({
  setCategory,
  setBrand,
  setSort,
  clearFilters,
  category,
  brand,
  sort,
}: FilterSidebarProps) {
  return (
    <aside className="flex flex-col bg-white border rounded-xl p-10 shadow-md w-64 gap-8">
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-gray-700 mb-3">دسته‌بندی کالاها:</p>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="category"
            value="mobile"
            onChange={() => setCategory("mobile")}
            checked={category === "mobile"}
          />
          موبایل
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="category"
            value="laptop"
            onChange={() => setCategory("laptop")}
            checked={category === "laptop"}
          />
          لپ تاپ
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="category"
            value="tablet"
            onChange={() => setCategory("tablet")}
            checked={category === "tablet"}
          />
          تبلت
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-semibold text-gray-700 mb-3">برند:</p>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="Apple"
            onChange={(e) => setBrand(e.target.value)}
            checked={brand === "Apple"}
          />
          Apple
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="HTC"
            onChange={(e) => setBrand(e.target.value)}
            checked={brand === "HTC"}
          />
          HTC
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="Lenovo"
            onChange={(e) => setBrand(e.target.value)}
            checked={brand === "Lenovo"}
          />
          Lenovo
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="Nokia"
            onChange={(e) => setBrand(e.target.value)}
            checked={brand === "Nokia"}
          />
          Nokia
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="Samsung"
            onChange={(e) => setBrand(e.target.value)}
            checked={brand === "Samsung"}
          />
          Samsung
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="brand"
            value="Sony"
            onChange={(e) => setBrand(e.target.value)}
            checked={brand === "Sony"}
          />
          Sony
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-semibold text-gray-700 mb-3">
          مرتب‌سازی براساس قیمت:
        </p>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="ascending"
            onChange={(e) => setSort(e.target.value)}
            checked={sort === "ascending"}
          />
          ارزان‌ترین
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="descending"
            onChange={(e) => setSort(e.target.value)}
            checked={sort === "descending"}
          />
          گرانترین
        </label>
      </div>

      <button
        className="w-full py-2 rounded-lg border hover:bg-gray-100 transition duration-200"
        onClick={clearFilters}
      >
        پاک کردن فیلترها
      </button>
    </aside>
  );
}

export default FilterSidebar;
