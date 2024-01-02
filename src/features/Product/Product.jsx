import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import ProductUser from "./ProductUser/ProductUser";
import ProductAdmin from "./ProductAdmin/ProductAdmin";
import { useSelector } from "react-redux";
import NotHavePermissionAccess from "../../components/NotHavePermissionAccess/NotHavePermissionAccess";
import PageNotFound from "../../components/PageNotFound/PageNotFound";

Product.propTypes = {};

function Product(props) {
  const infoUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!infoUser.id;

  return (
    <Routes>
      <Route path="/user" element={<ProductUser />} />
      <Route
        path="/admin/*"
        element={isLoggedIn ? <ProductAdmin /> : <NotHavePermissionAccess />}
      />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Product;
