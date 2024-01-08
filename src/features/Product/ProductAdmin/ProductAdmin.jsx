import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../../../components/PageNotFound/PageNotFound";
import Sidebar from "./components/Sidebar";
import ProductCreate from "./pages/ProductCreate";
import ProductListAdmin from "./pages/ProductListAdmin";
import ProductUpdate from "./pages/ProductUpdate";
import { useSelector } from "react-redux";

function ProductAdmin(props) {
  const productList = useSelector((state) => state.products);

  return (
    <div className="grid grid-cols-12 w-full bg-pink-300 h-[calc(100vh-var(--height-header))] max-h-[calc(100vh-var(--height-header))]">
      <Sidebar />
      <Routes>
        <Route
          path="/product-list"
          element={<ProductListAdmin productList={productList} />}
        />
        <Route path="/create" element={<ProductCreate />} />
        <Route path="/update/:id" element={<ProductUpdate />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default ProductAdmin;
