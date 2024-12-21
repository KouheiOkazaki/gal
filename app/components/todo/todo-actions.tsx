import { Button } from '../ui/button';
import { MdEdit, MdDelete } from 'react-icons/md';

interface TodoActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export function TodoActions({ onEdit, onDelete }: TodoActionsProps) {
  return (
    <div className="flex gap-2">
      <Button onClick={onEdit}>
        <MdEdit className="h-4 w-4" />
      </Button>
      <Button variant="danger" onClick={onDelete}>
        <MdDelete className="h-4 w-4" />
      </Button>
    </div>
  );
}