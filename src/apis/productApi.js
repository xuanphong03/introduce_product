import StorageKeys from "../constants/storage-key";
import axiosClient from "./axiosClient";

const productApi = {
  getAll() {},

  addProduct(data) {
    try {
      const url = "/api/v1/add-ob";
      return axiosClient.post(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`,
        },
      });
    } catch (error) {
      // Xử lý các lỗi
      throw error;
    }
  },
};

export default productApi;
