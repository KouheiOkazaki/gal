import { TodoInput } from './components/todo-input';
import { KanbanBoard } from './components/kanban/board';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">TODOリスト</h1>
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <TodoInput />
          <KanbanBoard />
        </div>
      </div>
    </main>
  );
}