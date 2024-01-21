import React from "react";
import { useSelector } from "react-redux";

CartList.propTypes = {};

function CartList(props) {
  const { cart } = useSelector((state) => state.user);

  // Tạo mảng mới chứa sản phẩm không trùng nhau (đếm sl sp trùng)
  const newCartList = cart.items.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.count += 1;
      existingItem.totalCost += item.price;
    } else {
      acc.push({
        name: item.name,
        count: 1,
        totalCost: item.price,
      });
    }
    return acc;
  }, []);

  return (
    <div className="border border-solid border-gray-300 w-[400px] max-h-[600px] p-4 bg-red-50 rounded-md">
      <h4 className="text-center uppercase text-xl pb-2 border-b-2 border-solid border-black mb-3">
        Product cart
      </h4>
      <table className="w-full mb-12 border border-solid border-black ">
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Count</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {newCartList.map((product, index) => {
            return (
              <tr
                key={index}
                className="padding-2 border-t border-solid border-black"
              >
                <td>
                  <div className="p-2">
                    <img
                      className="w-14 h-14"
                      src="https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png"
                      alt=""
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div>
                    <span className="text-sm">{product.name}</span>
                  </div>
                </td>
                <td align="center">{`x ${product.count}`}</td>
                <td>{`$ ${product.totalCost}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className=" fixed text-xl left-4 bottom-4 right-4">
        <span className="font-bold mr-2">Total:</span>${cart.totalCost}
      </div>
    </div>
  );
}

export default CartList;
