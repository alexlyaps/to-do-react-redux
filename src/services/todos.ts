// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ToDo } from "@/services/types";
import { Data } from "@/services/types";

const API_BASE_URL = "http://localhost:3000/api/";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<ToDo[], void>({
      query: () => `tasks`,
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation<ToDo, Data>({
      query: (data) => ({
        url: "tasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),
    removeTodo: builder.mutation<ToDo, number>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useRemoveTodoMutation } =
  todosApi;
