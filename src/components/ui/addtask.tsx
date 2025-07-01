import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useAddTodoMutation } from "@/services/todos.ts";

const AddTask = () => {
  const [newTask, setNewTask] = useState("");

  const [addTask, { isLoading: isAdding }] = useAddTodoMutation();

  const handleAddTask = () => {
    const data = {
      text: newTask,
      completed: false,
    };
    addTask(data);
    setNewTask("");
  };

  return (
    <>
      <Stack direction="column" spacing={1} alignItems="center">
        {" "}
        <TextField
          id="outlined-basic"
          size="small"
          label="New task"
          variant="outlined"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={handleAddTask} variant="contained" fullWidth>
          ADD
        </Button>
      </Stack>
    </>
  );
};

export default AddTask;
