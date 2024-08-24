import React, { createContext, useState } from "react";
import products from "../product";

export const AddedItemsContext = createContext();

export const AddedItemsProvider = ({ children }) => {
  const [addedItems, setAddedItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const onAdd = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    const isAlreadyAdded = addedItems.find((item) => item.id === id);

    if (!isAlreadyAdded && productToAdd) {
      setAddedItems([...addedItems, productToAdd]);
      console.log("added item: ", productToAdd.id);
    }
  };

  const onDelete = (id) => {
    const updatedItems = addedItems.filter((product) => product.id !== id);
    setAddedItems(updatedItems);
    console.log("deleted item: ", id);
  };

  const onCartPressed = () => {
    setShowCart(!showCart);
  };

  return (
    <AddedItemsContext.Provider
      value={{ addedItems, showCart, onAdd, onDelete, onCartPressed }}
    >
      {children}
    </AddedItemsContext.Provider>
  );
};
