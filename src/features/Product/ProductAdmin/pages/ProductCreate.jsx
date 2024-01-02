import React from "react";
import FormCreateProduct from "./FormCreateProduct";

function ProductCreate(props) {
  const handleCreateProduct = (data) => {
    console.log(data);
  };
  return (
    <div className="flex-1 px-6 py-2 bg-green-300">
      <FormCreateProduct onSubmit={handleCreateProduct} />
    </div>
  );
}

export default ProductCreate;
