import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosAuthApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosAuthApi.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("signInToken");
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  },
  (error) => {
    console.log("에러", error);
    return Promise.reject(error);
  }
);
