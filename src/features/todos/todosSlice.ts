import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
  color?: string;
}

export type TodosState = ToDo[];

const initialState: TodosState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.push({
        id: state[state.length - 1].id + 1,
        text: action.payload,
        completed: false,
      });
    },
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { addTask, toggleTask } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todosSlice.reducer;
