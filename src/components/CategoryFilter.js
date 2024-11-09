import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
        categories.map((category) => (
          <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onSelectedCategory(category)}
          >
            {category}
          </button>
        ))
      }
    </div>
  );
}

export default CategoryFilter;
