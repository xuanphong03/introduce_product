import React from "react";
import FormCreateProduct from "./FormCreateProduct";
import { ToastContainer, toast } from "react-toastify";

function ProductCreate(props) {
  const handleCreateProduct = (data) => {
    try {
      console.log("Data new product: ", data);

      toast.success("Add product successfully 🎉", {
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
      <FormCreateProduct onSubmit={handleCreateProduct} />
      <ToastContainer />
    </div>
  );
}

export default ProductCreate;
