import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

const access_token = localStorage.getItem("signInToken");

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosAuthApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  },
});
