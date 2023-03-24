import { axiosAuthApi } from "./client";

export const postTodoAxios = async (body) => {
  const res = await axiosAuthApi.post("/todos", body);

  return res;
};

export const getTodoAxios = async () => {
  const res = await axiosAuthApi.get("/todos");

  return res;
};

export const updateTodoAxios = async (id, body) => {
  const res = await axiosAuthApi.put(`/todos/${id}`, body);

  return res;
};

export const deleteTodoAxios = async (id) => {
  const res = await axiosAuthApi.delete(`/todos/${id}`);

  return res;
};
