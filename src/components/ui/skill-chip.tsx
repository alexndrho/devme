import { GripVerticalIcon, XIcon } from 'lucide-react';
import type { Skill } from '#/constants/skills';
import { cn, getSkillIconUrl } from '#/lib/utils';

export default function SkillChip({
  skill,
  isDragOver,
  onRemove,
  ...props
}: React.ComponentProps<'div'> & {
  skill: Skill;
  isDragOver: boolean;
  onRemove: () => void;
}) {
  return (
    <div
      draggable
      {...props}
      className={cn(
        'flex items-center gap-1.5 rounded-md border bg-secondary p-2 text-sm select-none cursor-grab active:cursor-grabbing transition-all',
        isDragOver && 'ring-2 ring-primary scale-105',
      )}
    >
      <GripVerticalIcon className="size-4 text-muted-foreground shrink-0" />
      <img
        src={getSkillIconUrl([skill.slug])}
        alt={skill.label}
        width={20}
        height={20}
        className="shrink-0"
      />
      <span className="text-xs">{skill.label}</span>
      <button
        type="button"
        onClick={onRemove}
        className="ml-0.5 text-muted-foreground hover:text-foreground transition-colors"
        aria-label={`Remove ${skill.label}`}
      >
        <XIcon className="size-3" />
      </button>
    </div>
  );
}
