import { axiosApi } from "./client";

export const 회원가입Axios = async (body) => {
  const res = await axiosApi.post("/auth/signup", body);
  return res;
};
