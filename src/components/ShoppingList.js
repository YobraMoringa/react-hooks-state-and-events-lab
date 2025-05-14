import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState(items);

  function filterCategory(e) {
    const copyOfItems = [...items];

    switch (e.target.value) {
      case "All":
        setSelectedCategory(copyOfItems);
        break;
      case "Produce":
        const produce = copyOfItems.filter((item) => item.category === "Produce");
        setSelectedCategory(produce);
        break;
      case "Dairy":
        const dairy = copyOfItems.filter((item) => item.category === "Dairy");
        setSelectedCategory(dairy);
        break;
      case "Dessert":
        const dessert = copyOfItems.filter((item) => item.category === "Dessert");
        setSelectedCategory(dessert);
        break;

    }
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
