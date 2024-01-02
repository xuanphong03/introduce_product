import React, { useState } from "react";
import PropTypes from "prop-types";
import uuid from "react-uuid";

ProductListAdmin.propTypes = {};

const PRODUCT_HEADER_LABEL = [
  { id: 1, name: "Name" },
  { id: 2, name: "Image" },
  { id: 3, name: "Color" },
  { id: 4, name: "Coutry" },
  { id: 5, name: "Price" },
  { id: 6, name: "Action" },
];

const PRODUCT_LIST = [
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Linjer watch",
    img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt7074f7f53ea9dc54/60dc11cc22d24e38a38c2ebe/seffren_motus-22515-42mm.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    country: "USA",
    price: 2999,
  },
];

function ProductListAdmin(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const limitItem = 5;

  // Tính toán chỉ mục bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (currentPage - 1) * limitItem;
  const endIndex = startIndex + limitItem;

  // Lấy danh sách sản phẩm cho trang hiện tại
  const currentProducts = PRODUCT_LIST.slice(startIndex, endIndex);

  return (
    <div className="flex-1 p-6 bg-green-300">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {PRODUCT_HEADER_LABEL.map((p) => (
                <th key={p.id} scope="col" className="px-6 py-3">
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => {
              return (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-2 py-2">
                    <img src={product.img} alt="img" className="w-16 rounded" />
                  </td>
                  <td className="px-6 py-4">{product.color}</td>
                  <td className="px-6 py-4">{product.country}</td>
                  <td className="px-6 py-4">{`$${product.price}`}</td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </span>
                    <span className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3 cursor-pointer">
                      Remove
                    </span>
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
            currentPage === Math.ceil(PRODUCT_LIST.length / limitItem)
              ? "bg-gray-400 text-white"
              : ""
          }`}
          onClick={() =>
            setCurrentPage((prevPage) =>
              Math.min(prevPage + 1, Math.ceil(PRODUCT_LIST.length / limitItem))
            )
          }
          disabled={currentPage === Math.ceil(PRODUCT_LIST.length / limitItem)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductListAdmin;
