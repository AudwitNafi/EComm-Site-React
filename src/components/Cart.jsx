import React, { useContext, useEffect, useState } from "react";
import { AddedItemsContext } from "./AddedItemsContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { addedItems } = useContext(AddedItemsContext);
  const getSubTotal = () => {
    let totalPrice = 0;
    for (let i = 0; i < addedItems.length; i++)
      totalPrice += addedItems[i].discountedPrice;
    return totalPrice;
  };
  const [cartState, setCartState] = useState({
    subTotal: 0,
    shippingFee: 0,
    vat: 0,
    total: 0,
    voucher: "",
    applied: false,
    discount: 0,
    grandTotal: 0,
  });

  useEffect(() => {
    const sTotal = getSubTotal();
    const shipping = sTotal * 0.02;
    const vats = sTotal * 0.05;
    const tots = sTotal + vats + shipping;
    setCartState({
      ...cartState,
      subTotal: sTotal,
      shippingFee: sTotal * 0.02,
      vat: sTotal * 0.05,
      discount: 0,
      total: tots,
      grandTotal: tots,
    });
  }, [addedItems]);

  const changeCartState = (task) => {
    if (task.type === "add") {
      const newSubTotal = cartState.subTotal + task.price;
      const shipping = newSubTotal * 0.02;
      const vats = newSubTotal * 0.05;
      const tots = newSubTotal + vats + shipping;
      console.log(newSubTotal);
      setCartState({
        ...cartState,
        subTotal: newSubTotal,
        shippingFee: newSubTotal * 0.02,
        vat: newSubTotal * 0.05,
        total: tots,
        grandTotal: tots,
      });
    }

    if (task.type === "deduct") {
      const newSubTotal = cartState.subTotal - task.price;
      const shipping = newSubTotal * 0.02;
      const vats = newSubTotal * 0.05;
      const tots = newSubTotal + vats + shipping;
      console.log(newSubTotal);
      setCartState({
        ...cartState,
        subTotal: newSubTotal,
        shippingFee: shipping,
        vat: vats,
        total: tots,
        grandTotal: tots,
      });
    }
  };

  const handleInputChange = (event) => {
    setCartState({ ...cartState, voucher: event.target.value });
    console.log(event.target.value);
  };

  const handleButtonClick = () => {
    if (cartState.applied) {
      return;
    }
    if (cartState.voucher === "BONUS50") {
      const newGrandTotal = 0.5 * cartState.grandTotal;
      setCartState({
        ...cartState,
        grandTotal: newGrandTotal,
        discount: 50,
        applied: true,
      });
    }
  };

  console.log(cartState.subTotal);
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <div className="cart-items">
        {addedItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            changeCartState={changeCartState}
          />
        ))}
      </div>
      <div className="cart-prices">
        <div className="cart-price-row">
          <label>Subtotal</label>
          <span>BDT {cartState.subTotal.toFixed(2)}</span>
        </div>
        <div className="cart-price-row">
          <label>Shipping fee</label>
          <span>BDT {cartState.shippingFee.toFixed(2)}</span>
        </div>
        <div className="cart-price-row">
          <label>Vat</label>
          <span>BDT {cartState.vat.toFixed(2)}</span>
        </div>
        <div className="cart-price-row">
          <label>Total</label>
          <span>BDT {cartState.total.toFixed(2)}</span>
        </div>
        <div className="voucher">
          <input type="text" onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Apply</button>
        </div>
        <div className="cart-price-row">
          <div className="grand-total-voucher">
            <label>Grand Total</label>
            {cartState.applied ? (
              <span className="voucher-message">Voucher applied(-50%)</span>
            ) : null}
          </div>
          <span>BDT {cartState.grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
