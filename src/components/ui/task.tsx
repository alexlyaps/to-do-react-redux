import { ToDo } from "@/features/todos/types";
import { useRemoveTodoMutation } from "@/services/todos.ts";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";

type TaskProps = {
  item: ToDo;
};

const Task: React.FC<TaskProps> = React.memo(({ item }) => {
  console.log(`Render Task ${item.id}`);

  const [removeTask, { isLoading }] = useRemoveTodoMutation();

  const handleRemove = (id: number) => {
    removeTask(id);
  };

  const handleToggle = (id: number) => {
    removeTask(id);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Checkbox
        checked={item.completed}
        onChange={() => handleToggle(item.id)}
      />
      <span>{item.text}</span>
      <Button
        variant="contained"
        size="small"
        onClick={() => handleRemove(item.id)}
      >
        remove
      </Button>
    </Stack>
  );
});

export default Task;
