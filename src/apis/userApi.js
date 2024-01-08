import axiosClient from "./axiosClient";

const userApi = {
  login(data) {
    const url = "/auth/local";
    return axiosClient.post(url, data);
  },

  getProfile() {
    const url = "/profile";
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    };
    console.log(config);
    return axiosClient.post(url, config);
  },
};

export default userApi;
