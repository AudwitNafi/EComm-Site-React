import React, { useContext } from "react";
import cart from "../cart.png";
import { AddedItemsContext } from "./AddedItemsContext";

const Navbar = () => {
  const { addedItems, onCartPressed } = useContext(AddedItemsContext);

  return (
    <nav>
      <div className="cart-toggle">
        <span className="cart-icon">
          <img src={cart} alt="cart" onClick={onCartPressed} />
          {addedItems.length > 0 && (
            <span className="cart-count">{addedItems.length}</span>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
