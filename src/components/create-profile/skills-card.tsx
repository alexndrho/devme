import { INITIAL_PROFILE_FORM_VALUES } from '#/constants/profile-form';
import { SKILL_GROUPS, SKILL_MAP, SKILLS_BY_GROUP } from '#/constants/skills';
import type { Skill } from '#/constants/skills';
import { useDragToReorder } from '#/hooks/use-drag-to-reorder';
import ProfileCard from './profile-card';
import SkillChip from '../ui/skill-chip';
import SkillToggle from '../ui/skill-toggle';
import type { ProfileFormCardProps } from './types';

export default function SkillsCard({
  values,
  setValues,
  previousPage,
  className,
}: Omit<ProfileFormCardProps, 'nextPage'>) {
  const safeValues = { ...INITIAL_PROFILE_FORM_VALUES, ...(values ?? {}) };
  const skills: string[] = safeValues.skills;

  const {
    dragOverItem: dragOverSlug,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
  } = useDragToReorder(skills, (reordered) =>
    setValues((prev) => ({ ...prev, skills: reordered })),
  );

  function toggleSkill(slug: string) {
    setValues((prev) => {
      const current = prev.skills;
      return {
        ...prev,
        skills: current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug],
      };
    });
  }

  return (
    <ProfileCard
      title="Skills"
      description="Select your tech stack"
      previousPage={previousPage}
      className={className}
    >
      <div className="flex flex-col gap-6">
        {/* Selected skills — flat, drag to reorder freely across groups */}
        {skills.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground uppercase">Selected — drag to reorder</p>
              <button
                type="button"
                onClick={() => setValues((prev) => ({ ...prev, skills: [] }))}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear all
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((slug) => {
                const skill = SKILL_MAP[slug] as Skill | undefined;
                if (!skill) return null; // unknown slug guard
                return (
                  <SkillChip
                    key={slug}
                    skill={skill}
                    isDragOver={dragOverSlug === slug}
                    onDragStart={() => handleDragStart(slug)}
                    onDragOver={(e) => handleDragOver(e, slug)}
                    onDrop={() => handleDrop(slug)}
                    onDragEnd={handleDragEnd}
                    onRemove={() => toggleSkill(slug)}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Toggle buttons — visually grouped, state is flat */}
        {SKILL_GROUPS.map((group) => (
          <div key={group} className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground uppercase">{group}</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS_BY_GROUP[group].map((skill) => (
                <SkillToggle
                  key={skill.slug}
                  skill={skill}
                  isSelected={skills.includes(skill.slug)}
                  onToggle={() => toggleSkill(skill.slug)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ProfileCard>
  );
}
