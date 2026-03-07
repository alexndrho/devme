import { useRef, useState } from 'react';

export function useDragToReorder<T extends string>(
  items: T[],
  onReorder: (reordered: T[]) => void,
) {
  const draggedItem = useRef<T | null>(null);
  const [dragOverItem, setDragOverItem] = useState<T | null>(null);

  function handleDragStart(item: T) {
    draggedItem.current = item;
  }

  function handleDragOver(e: React.DragEvent, item: T) {
    e.preventDefault();
    if (item !== draggedItem.current) setDragOverItem(item);
  }

  function handleDrop(target: T) {
    const from = draggedItem.current;
    if (!from || from === target) return;

    const arr = [...items];
    const fromIdx = arr.indexOf(from);
    const toIdx = arr.indexOf(target);

    arr.splice(fromIdx, 1);
    arr.splice(toIdx, 0, from);

    onReorder(arr);
    draggedItem.current = null;
    setDragOverItem(null);
  }

  function handleDragEnd() {
    draggedItem.current = null;
    setDragOverItem(null);
  }

  return { dragOverItem, handleDragStart, handleDragOver, handleDrop, handleDragEnd };
}
