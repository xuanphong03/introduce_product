import React from "react";
import FormUpdateProduct from "./FormUpdateProduct";

function ProductUpdate(props) {
  const handleUpdateProduct = (data) => {
    console.log(data);
  };
  return (
    <div className="flex-1 px-6 py-2 bg-gray-200">
      <FormUpdateProduct onSubmit={handleUpdateProduct} />
    </div>
  );
}

export default ProductUpdate;
