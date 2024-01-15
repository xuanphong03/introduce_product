import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "/auth/local";
    return axiosClient.post(url, data);
  },

  createProduct(data) {
    const url = "/api/v1/add-ob";
    return axiosClient.post(url, data);
  },
};

export default userApi;
