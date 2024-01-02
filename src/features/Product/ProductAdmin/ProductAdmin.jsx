import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProductCreate from "./pages/ProductCreate";
import ProductListAdmin from "./pages/ProductListAdmin";
import PageNotFound from "../../../components/PageNotFound/PageNotFound";

function ProductAdmin(props) {
  return (
    <div className="flex w-full bg-pink-300 h-[calc(100vh-var(--height-header))] max-h-[calc(100vh-var(--height-header))]">
      <Sidebar />
      <Routes>
        <Route path="/product-list" element={<ProductListAdmin />} />
        <Route path="/create" element={<ProductCreate />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default ProductAdmin;
