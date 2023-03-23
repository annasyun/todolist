import { axiosAuthApi } from "./client";

export const postTodoAxios = async (body) => {
  const res = await axiosAuthApi.post("/todos", body);

  return res;
};

export const getTodoAxios = async () => {
  const res = await axiosAuthApi.get("/todos");

  return res;
};
