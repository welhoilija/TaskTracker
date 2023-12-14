export type Task = {
    name: string;
    description: string | null;
    due_date: string | null;
    due_time: string | null;
    parent: number | null;
    id: number;
    state: number;
}