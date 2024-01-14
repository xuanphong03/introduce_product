import React from "react";
import FormUpdateProduct from "./FormUpdateProduct";

function ProductUpdate({ product, closeForm }) {
  const handleUpdateProduct = (data) => {
    closeForm();
    console.log("Data product after update: ", data);
  };
  return (
    <div className="col-span-11 md:col-span-10 px-6 py-2 bg-gray-200">
      <FormUpdateProduct product={product} onSubmit={handleUpdateProduct} />
    </div>
  );
}

export default ProductUpdate;
