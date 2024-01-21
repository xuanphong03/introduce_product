import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi";
import StorageKeys from "../../constants/storage-key";
import uuid from "react-uuid";

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

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

  return data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
    cart: {
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

      state.current = {};
    },

    addProductToCart(state, action) {
      const product = action.payload;

      if (product) {
        const newItem = {
          id: uuid(),
          name: product.name,
          price: product.price,
        };

        state.cart.items.push(newItem);
        state.cart.totalItem += 1;
        state.cart.totalCost += product.price;
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
