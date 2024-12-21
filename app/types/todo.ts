export type TodoStatus = 'backlog' | 'in-progress' | 'done';

export interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
  createdAt: Date;
}