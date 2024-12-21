import { TodoStatus } from '../types/todo';

export const KANBAN_COLUMNS: { status: TodoStatus; title: string }[] = [
  { status: 'backlog', title: '未着手' },
  { status: 'in-progress', title: '進行中' },
  { status: 'done', title: '完了' },
] as const;