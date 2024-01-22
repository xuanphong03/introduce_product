import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi";
import StorageKeys from "../../constants/storage-key";
import axios from "axios";

// First, create the thunk
export const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.login(payload);

  const responseApiDog = await axios.get(
    "https://dog.ceo/api/breeds/image/random"
  );
  const avatarDog = responseApiDog.data.message;

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  localStorage.setItem(StorageKeys.AVATAR, avatarDog);

  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
    cart: JSON.parse(localStorage.getItem(StorageKeys.CART)) || {
      totalItem: 0,
      totalCost: 0,
      items: [],
    },
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.clear(StorageKeys.TOKEN);
      localStorage.clear(StorageKeys.USER);
      localStorage.clear(StorageKeys.CART);
      localStorage.clear(StorageKeys.AVATAR);

      state.current = {};
      state.cart = {
        totalItem: 0,
        totalCost: 0,
        items: [],
      };
    },

    addProductToCart(state, action) {
      const { product, count } = action.payload;
      let quanityAdded = 1;
      if (count) quanityAdded = count;
      if (product) {
        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
        const existingItem = state.cart.items.find(
          (item) => item.name === product.name
        );

        if (existingItem) {
          // Nếu sản phẩm đã tồn tại, chỉ cần tăng số lượng và giá tiền
          existingItem.count += quanityAdded;
          existingItem.totalPrice += product.price * quanityAdded;
        } else {
          // Nếu sản phẩm chưa tồn tại, thêm vào giỏ hàng
          const newItem = {
            count: quanityAdded,
            id: product.id,
            name: product.name,
            imgURL: product.pictureURL,
            unitPrice: product.price,
            totalPrice: product.price,
          };

          state.cart.items.push(newItem);
        }
        state.cart.totalItem += quanityAdded;
        state.cart.totalCost += product.price * quanityAdded;

        // Lưu vào localStorage
        localStorage.setItem(StorageKeys.CART, JSON.stringify(state.cart));
      }
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
const { actions, reducer } = userSlice;
export default reducer;
export const { logout, addProductToCart } = actions;
