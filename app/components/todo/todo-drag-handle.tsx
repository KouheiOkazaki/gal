import { MdDragIndicator } from 'react-icons/md';
import { Button } from '../ui/button';

interface TodoDragHandleProps {
  listeners: any;
  attributes: any;
}

export function TodoDragHandle({ listeners, attributes }: TodoDragHandleProps) {
  return (
    <Button
      variant="ghost"
      {...listeners}
      {...attributes}
      className="touch-none"
    >
      <MdDragIndicator className="h-4 w-4" />
    </Button>
  );
}