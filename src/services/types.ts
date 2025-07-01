export type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Data = Omit<ToDo, "id">;

export type TodosState = {
  items: ToDo[] | null;
};
