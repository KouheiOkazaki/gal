'use client';

import { useTodoStore } from '../store/todo-store';
import { motion } from 'framer-motion';

export function TodoFilters() {
  const { filter, setFilter } = useTodoStore();

  const filters = [
    { label: 'すべて', value: 'all' },
    { label: '未完了', value: 'active' },
    { label: '完了済み', value: 'completed' },
  ] as const;

  return (
    <div className="flex gap-2 mb-6">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`relative px-4 py-2 rounded-lg ${
            filter === value
              ? 'text-white'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {filter === value && (
            <motion.div
              layoutId="filter-active"
              className="absolute inset-0 bg-blue-600 rounded-lg"
              initial={false}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative">{label}</span>
        </button>
      ))}
    </div>
  );
}