import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addTask, toggleTask } from "@/features/todos/todosSlice.js";

function App() {
  const [newTask, setNewTask] = useState("");

  const tasks = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleToggle = (id: number) => {
    dispatch(toggleTask(id));
  };

  const handleAddTask = () => {
    dispatch(addTask(newTask));
    setNewTask("");
  };

  return (
    <div className="flex-center flex-col h-screen gap-4">
      <h1 className="text-lg">TODO APP</h1>
      <ul className="list-none">
        {tasks.map((item) => (
          <li>
            <input
              type="checkbox"
              checked={item.completed}
              onClick={() => handleToggle(item.id)}
            />
            {item.text}
          </li>
        ))}
      </ul>
      <div className="flex gap-3">
        <label htmlFor="task">NEW TASK</label>
        <input
          name="task"
          type="text"
          className="border"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="border px-3" onClick={handleAddTask}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default App;
