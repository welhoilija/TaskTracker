export type Task = {
  name: string;
  description: string | undefined;
  due_date: string | undefined;
  due_time: string | undefined;
  parent: number | null;
  id: number;
  state: number;
};
