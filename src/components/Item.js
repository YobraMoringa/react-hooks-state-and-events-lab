import React, { useState } from "react";

function Item({ name, category }) {
  const [itemState, setItemState] = useState(true);

  function addOrRemoveFromCart() {
    setItemState(itemState => !itemState)
  }

  const liClass = itemState ? "" : "in-cart";
  const buttonClass = itemState ? "add" : "remove";
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={addOrRemoveFromCart}>
        {itemState ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
