import axiosClient from "./axiosClient";

const productApi = {
  getAll() {},

  addProduct(data) {
    const url = "/api/v1/add-ob";
    return axiosClient.post(url, data);
  },
};

export default productApi;
