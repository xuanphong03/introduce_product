import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../apis/userApi";
import StorageKeys from "../../constants/storage-key";

// First, create the thunk
export const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.login(payload);
  console.log(data);
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
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.clear(StorageKeys.TOKEN);
      localStorage.clear(StorageKeys.USER);

      state.current = {};
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
const { actions, reducer } = userSlice;
export default reducer;
export const { logout } = actions;
