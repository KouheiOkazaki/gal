interface TodoEditFormProps {
  title: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (value: string) => void;
}

export function TodoEditForm({ title, onSubmit, onChange }: TodoEditFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex-1">
      <input
        type="text"
        value={title}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        autoFocus
        onBlur={(e) => onSubmit(e)}
      />
    </form>
  );
}