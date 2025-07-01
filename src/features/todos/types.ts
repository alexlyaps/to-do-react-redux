import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

export type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};
export type Data = Omit<ToDo, "id">;

export type TodosState = {
  items: ToDo[] | null;
};

const initialState: TodosState = {
  items: null,
};

export const fetchTasks = createAsyncThunk("todos/fetchTasks", async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  return await res.json();
});

export const addTask = createAsyncThunk("todos/addTask", async (data: Data) => {
  const res = await fetch("http://localhost:3000/api/tasks", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
});

export const removeTask = createAsyncThunk(
  "todos/removeTask",
  async (id: number, { dispatch }) => {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Deletion Error");
    await dispatch(fetchTasks());
    return await res.json();
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.items?.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.items?.push(action.payload);
    });
  },
});

export const { toggleTask } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todosSlice.reducer;
