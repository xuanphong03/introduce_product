import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const PRODUCT_LIST = [
  {
    id: uuid(),
    name: "Casio GA-2100RB-3A",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GA/GA2/ga-2100rb-3a/assets/GA-2100RB-3A.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio GM-2100MWG-1A",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/G/GM/gm2/gm-2100mwg-1a/assets/GM-2100MWG-1A.png.transform/product-panel/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    brand: "Rolex",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    brand: "Rolex",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Linjer watch",
    img: "https://eu-images.contentstack.com/v3/assets/blt7dcd2cfbc90d45de/blt7074f7f53ea9dc54/60dc11cc22d24e38a38c2ebe/seffren_motus-22515-42mm.jpg?format=pjpg&auto=webp&quality=75%2C90&width=3840",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    brand: "Rolex",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
  {
    id: uuid(),
    name: "Casio MTP-1375D-2A1V",
    img: "https://www.casio.com/content/dam/casio/product-info/locales/vn/vi/timepiece/product/watch/M/MT/MTP/mtp-1375d-2a1v/assets/MTP-1375D-2A1V.png.transform/main-visual-pc/image.png",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 5000,
  },
  {
    id: uuid(),
    name: "Apple watch",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MT3D3ref_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=2000&hei=2000&fmt=png-alpha&.v=1694507496485",
    color: "While",
    brand: "Rolex",
    country: "USA",
    price: 9999,
  },
  {
    id: uuid(),
    name: "Đồng hồ Rolex",
    img: "https://image.bnews.vn/MediaUpload/Org/2020/01/08/143207_10512246-xxl.jpg",
    color: "Silver",
    brand: "Rolex",
    country: "USA",
    price: 2999,
  },
];

const productSlice = createSlice({
  name: "products",
  initialState: PRODUCT_LIST,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
const { actions, reducer } = productSlice;
export default reducer;
export const { addProduct } = actions;
