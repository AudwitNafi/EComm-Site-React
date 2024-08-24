import React, { useContext, useEffect } from "react";
import { AddedItemsContext } from "./components/AddedItemsContext";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import products from "./product";
import "./style.css";

function App() {
  // const [addedItems, setAddedItems] = useState([]);
  const { addedItems, showCart } = useContext(AddedItemsContext);

  // const onAdd = (id) => {
  //   const productToAdd = products.find((product) => product.id === id);
  //   const isAlreadyAdded = addedItems.find((item) => item.id === id);

  //   if (!isAlreadyAdded && productToAdd) {
  //     setAddedItems([...addedItems, productToAdd]);
  //     console.log("added item: ", productToAdd.id);
  //   }
  // };

  // const onDelete = (id) => {
  //   const updatedItems = addedItems.filter((product) => product.id !== id);
  //   setAddedItems(updatedItems);
  //   console.log("deleted item: ", id);
  // };

  // console.log(products);
  useEffect(() => {
    console.log(addedItems);
  }, [addedItems]);
  return (
    <div className="parent">
      <Navbar />
      <div className="product-cart">
        <div className="product-list">
          {products.map((product) => (
            <Product
              key={product.id}
              details={{
                id: product.id,
                title: product.title,
                category: product.category,
                image: product.image,
                rating: product.rating,
                price: product.price,
                isOnSale: product.isOnSale,
                discountedPrice: product.discountedPrice,
              }}
            />
          ))}
        </div>
        {/* {showCart && <Cart />} */}
        <div className={`cart-drawer ${showCart ? "open" : ""}`}>
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;
