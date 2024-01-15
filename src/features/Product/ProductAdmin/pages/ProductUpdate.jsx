import React from "react";
import FormUpdateProduct from "./FormUpdateProduct";
import { toast } from "react-toastify";

function ProductUpdate({ product, closeForm }) {
  const handleUpdateProduct = (data) => {
    try {
      closeForm();
      console.log("Data product after update: ", data);

      toast.success("Update product successfully 🎉", {
        autoClose: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.success("Add product failed 🙁", {
        autoClose: 3000,
      });
    }
  };
  return (
    <div className="col-span-11 md:col-span-10 px-6 py-2 bg-gray-200">
      <FormUpdateProduct product={product} onSubmit={handleUpdateProduct} />
    </div>
  );
}

export default ProductUpdate;
