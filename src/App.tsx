import { useGetTodosQuery } from "@/services/todos.ts";

import Task from "@/components/ui/task.tsx";
import AddTask from "@/components/ui/addtask.tsx";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function App() {
  const { data, error, isLoading } = useGetTodosQuery();

  return (
    <Stack direction="column" spacing={1} alignItems="center">
      <Typography variant="h3" component="h1">
        Dodo App
      </Typography>
      <AddTask />
      <ul>
        {isLoading && <li>Loading...</li>}
        {error && <li>Error loading tasks</li>}

        {data && data.length > 0
          ? data.map(
              (item) =>
                item && (
                  <li key={item.id}>
                    <Task item={item} />
                  </li>
                )
            )
          : !isLoading && <li>No tasks found</li>}
      </ul>
    </Stack>
  );
}

export default App;
