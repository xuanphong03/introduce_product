import axios from "axios";
import StorageKeys from "../constants/storage-key";

const axiosClient = axios.create({
  baseURL: "https://api.ezfrontend.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Alter defaults after instance has been created
axiosClient.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem(StorageKeys.TOKEN)}`;

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Interceptors response: ", response.data);
    return response && response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);

export default axiosClient;
