import type { Skill } from '#/constants/skills';
import { cn, getSkillIconUrl } from '#/lib/utils';

export default function SkillToggle({
  skill,
  isSelected,
  onToggle,
  ...props
}: React.ComponentProps<'button'> & {
  skill: Skill;
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        'flex flex-col items-center gap-1 rounded-lg border p-2 w-20 cursor-pointer transition-all',
        isSelected
          ? 'border-primary bg-primary/10 ring-1 ring-primary'
          : 'border-border bg-background hover:bg-accent',
      )}
      {...props}
    >
      <img src={getSkillIconUrl([skill.slug])} alt={skill.label} width={32} height={32} />
      <span
        className={cn(
          'text-xs leading-tight text-center line-clamp-1 w-full',
          isSelected ? 'text-primary font-medium' : 'text-muted-foreground',
        )}
      >
        {skill.label}
      </span>
    </button>
  );
}
