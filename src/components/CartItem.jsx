import React, { useContext, useState } from "react";
import { AddedItemsContext } from "./AddedItemsContext";
// import deleteIcon from "../860829.png";

const CartItem = ({ item, changeCartState }) => {
  const { onDelete } = useContext(AddedItemsContext);
  const [itemState, setItemState] = useState({
    quantity: 1,
    totalItemPrice: item.discountedPrice,
  });

  const handleAdd = () => {
    const qt = itemState.quantity;
    const price = itemState.totalItemPrice;
    setItemState({
      quantity: qt + 1,
      totalItemPrice: price + item.discountedPrice,
    });
    changeCartState({ type: "add", price: item.discountedPrice });
  };

  const handleMinus = () => {
    const qt = itemState.quantity;
    const price = itemState.totalItemPrice;
    setItemState({
      quantity: qt - 1,
      totalItemPrice: price - item.discountedPrice,
    });
    if (itemState.quantity === 1) handleDelete();
    changeCartState({ type: "deduct", price: item.discountedPrice });
  };

  const handleDelete = () => {
    onDelete(item.id);
    changeCartState({ type: "deduct", price: itemState.totalItemPrice });
  };

  return (
    <div className="added-item">
      <img className="cart-img" src={item.image} alt="product" />
      <div className="title-quantity">
        <span>{item.title}</span>
        <div className="quantity-button">
          <div>
            <button onClick={handleMinus}>-</button>
            <span className="quantity">{itemState.quantity}</span>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
      <div className="delete-price">
        <div onClick={handleDelete} className="delete-button">
          <img
            src="./images/860829.png"
            alt="delte-button"
            className="delete-button"
          />
        </div>
        <div>BDT {itemState.totalItemPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItem;
