import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AddedItemsProvider } from "./components/AddedItemsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AddedItemsProvider>
      <App />
    </AddedItemsProvider>
  </React.StrictMode>
);
