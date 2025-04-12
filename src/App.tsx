// import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
  const tasks = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch();
  };

  return (
    <div className="flex-center flex-col h-screen">
      <h1 className="text-lg">TODO APP</h1>
      <ul className="list-non e">
        {tasks.map((item) => (
          <li>
            <input
              type="checkbox"
              value={item.completed ? "" : "checked"}
              onClick={handleToggle}
            />{" "}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
