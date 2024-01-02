// FilterBox.js
import React, { useState } from "react";
import "./FilterBox.css";

const FilterBox = ({ onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  // Sample brands (replace with your actual brands)
  const brands = ["Brand1", "Brand2", "Brand3"];

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
  };

  return (
    <div className="filter-box">
      <div className="price-filter">
        <label>Price Range:</label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        />
        <span>${priceRange[0]}</span> - <span>${priceRange[1]}</span>
      </div>
      <div className="brand-filter">
        <label>Brands:</label>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>
      <button onClick={onClose}>Apply Filters</button>
    </div>
  );
};

export default FilterBox;
