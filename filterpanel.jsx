import React from 'react';

const categories = ['Electronics', 'Clothing', 'Home', 'Toys'];

const FilterPanel = ({ filters, setFilters }) => {
  const handleCategoryChange = (category) => {
    const updated = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: updated });
  };

  const handlePriceChange = (e) => {
    const value = +e.target.value;
    setFilters({ ...filters, priceRange: [0, value] });
  };

  const handleRatingChange = (e) => {
    setFilters({ ...filters, rating: +e.target.value });
  };

  const clearFilters = () => {
    setFilters({ categories: [], priceRange: [0, 500], rating: 0 });
  };

  return (
    <div className="w-full lg:w-1/4 border rounded p-4 shadow">
      <h2 className="text-xl font-semibold mb-2">Filters</h2>

      <div className="mb-4">
        <h3 className="font-medium mb-1">Category</h3>
        {categories.map(cat => (
          <div key={cat}>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={filters.categories.includes(cat)} onChange={() => handleCategoryChange(cat)} />
              {cat}
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-1">Price Range (Max: ${filters.priceRange[1]})</h3>
        <input type="range" min="0" max="500" value={filters.priceRange[1]} onChange={handlePriceChange} className="w-full" />
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-1">Minimum Rating</h3>
        <select value={filters.rating} onChange={handleRatingChange} className="w-full border rounded px-2 py-1">
          {[0, 1, 2, 3, 4, 5].map(r => (
            <option key={r} value={r}>{r}+</option>
          ))}
        </select>
      </div>

      <button onClick={clearFilters} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Clear Filters</button>
    </div>
  );
};

export default FilterPanel;