import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdDeleteOutline, MdOutlineCreate } from "react-icons/md";
import ProductUpdate from "./ProductUpdate";

ProductListAdmin.propTypes = {
  productList: PropTypes.array.isRequired,
};

const PRODUCT_HEADER_LABEL = [
  { id: 1, name: "Name" },
  { id: 2, name: "Image" },
  { id: 3, name: "Color" },
  { id: 4, name: "Brand" },
  { id: 5, name: "Coutry" },
  { id: 6, name: "Price" },
  { id: 7, name: "Action" },
];

function ProductListAdmin({ productList = [] }) {
  const [updatingProduct, setUpdatingProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limitItem = 5;

  // Tính toán chỉ mục bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (currentPage - 1) * limitItem;
  const endIndex = startIndex + limitItem;

  // Lấy danh sách sản phẩm cho trang hiện tại
  const currentProducts = productList.slice(startIndex, endIndex);

  const handleUpdateProduct = (product) => {
    console.log("Data product before update: ", product);

    setSelectedProduct(product);
    setUpdatingProduct(true);
  };

  const handleCloseFormUpdate = () => {
    setUpdatingProduct(false);
  };

  return (
    <div className="relative col-span-11 md:col-span-10 p-6 bg-gray-200">
      {updatingProduct && (
        <ProductUpdate
          product={selectedProduct}
          closeForm={handleCloseFormUpdate}
        />
      )}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-slate-600 text-white">
              {PRODUCT_HEADER_LABEL.map((p) => (
                <th key={p.id} scope="col" className={`px-6 py-3 `}>
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                  >
                    {product.name}
                  </th>
                  <td className="px-2 py-2">
                    <img
                      src={product.pictureURL}
                      alt="img"
                      className="w-16 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 ">{product.color}</td>
                  <td className="px-6 py-4">{product.brand}</td>
                  <td className="px-6 py-4">{product.country}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td className="px-6 py-4">
                    <div
                      onClick={() => handleUpdateProduct(product)}
                      className="flex items-center px-1 py-2 cursor-pointer hover:underline"
                    >
                      <MdOutlineCreate className="mr-1 text-lg" />
                      <span className="font-medium text-blue-600 dark:text-blue-500">
                        Edit
                      </span>
                    </div>
                    <div className="flex items-center p-1 hover:underline cursor-pointer">
                      <MdDeleteOutline className="mr-1 text-lg" />
                      <span className="font-medium text-red-600 dark:text-red-500 ">
                        Remove
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-end mt-4 items-center">
        <button
          className={`px-3 py-2 bg-blue-500 text-white rounded min-w-[85px] ${
            currentPage === 1 ? "bg-gray-400 text-white" : ""
          }`}
          onClick={() =>
            setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
          }
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-2">{`Page ${currentPage}`}</span>
        <button
          className={`px-3 py-2 bg-blue-500 text-white rounded min-w-[85px] ${
            currentPage === Math.ceil(productList.length / limitItem)
              ? "bg-gray-400 text-white"
              : ""
          }`}
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(prevPage + 1, Math.ceil(productList.length / limitItem))
            )
          }
          disabled={currentPage === Math.ceil(productList.length / limitItem)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductListAdmin;
