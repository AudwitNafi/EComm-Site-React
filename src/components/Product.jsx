import React, { useContext } from "react";
import { AddedItemsContext } from "./AddedItemsContext";
import Rating from "./Rating";

const Product = ({ details }) => {
  const {
    id,
    title,
    category,
    image,
    rating,
    price,
    isOnSale,
    discountedPrice,
  } = details;

  const { onAdd } = useContext(AddedItemsContext);

  const onAddBtnPressed = () => {
    onAdd(id);
    console.log(id);
  };

  return (
    <div className="product">
      {isOnSale ? <div className="sale">Sale</div> : null}
      <div className="product-details">
        <img className="product-img" src={image} alt={title} />
        <div className="category">{category}</div>
        <div>{title}</div>
        <Rating rating={rating} />
        <div className="price-btn">
          <div className="price">
            <span className="discounted-price">
              <span style={{ fontSize: "12px" }}>BDT </span>
              {discountedPrice.toFixed(2)}
            </span>
            <span className="actual-price">{price}</span>
          </div>
          <button onClick={onAddBtnPressed} className="add-btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
