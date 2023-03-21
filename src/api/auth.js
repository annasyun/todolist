import { axiosApi } from "./client";

const 회원가입Axios = async (body) => {
  const res = await axiosApi.post("/auth/signup", body);

  return res;
};

const 로그인Axios = async (body) => {
  const res = await axiosApi.post("/auth/signin", body);

  return res;
};

export { 회원가입Axios, 로그인Axios };
