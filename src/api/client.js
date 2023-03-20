import axios from "axios";
import { BASE_URL } from "../constant/baseUrl";

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

