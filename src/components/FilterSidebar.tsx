function FilterSidebar() {
  return (
    <aside>
      <label htmlFor="category-mobile">موبایل</label>
      <input type="radio" id="category-mobile" name="category" value="mobile" />

      <label htmlFor="category-laptop">لپ تاپ</label>
      <input type="radio" id="category-laptop" name="category" value="laptop" />

      <label htmlFor="category-tablet">تبلت</label>
      <input type="radio" id="category-tablet" name="category" value="tablet" />

      <label htmlFor="price-ascending">مرتب سازی بر اساس افزایش قیمت</label>
      <input type="radio" id="price-ascending" name="price" value="ascending" />

      <label htmlFor="price-descending">مرتب سازی بر اساس کاهش قیمت</label>
      <input
        type="radio"
        id="price-descending"
        name="price"
        value="descending"
      />
    </aside>
  );
}

export default FilterSidebar;
