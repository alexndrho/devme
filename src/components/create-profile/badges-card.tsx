import { INITIAL_PROFILE_FORM_VALUES } from '#/constants/profile-form';
import { cn } from '#/lib/utils';
import ProfileCard from './profile-card';
import { Field, FieldLabel, FieldDescription } from '../ui/field';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupInput } from '../ui/input-group';
import type { ProfileFormCardProps } from './types';

const STREAK_THEMES = [
  { value: 'default', label: 'Default' },
  { value: 'dark', label: 'Dark' },
  { value: 'tokyonight', label: 'Tokyo Night' },
  { value: 'dracula', label: 'Dracula' },
  { value: 'radical', label: 'Radical' },
  { value: 'monokai', label: 'Monokai' },
] as const;

export default function BadgesCard({ values, setValues, ...props }: ProfileFormCardProps) {
  const safeValues = { ...INITIAL_PROFILE_FORM_VALUES, ...(values ?? {}) };
  const { githubUsername, streakStatsTheme } = safeValues;

  return (
    <ProfileCard title="Badges" description="Add GitHub streak stats to your README" {...props}>
      <div className="flex flex-col gap-6">
        {/* GitHub username input */}
        <Field>
          <FieldLabel>GitHub Username</FieldLabel>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <InputGroupText>https://github.com/</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              placeholder="your-username"
              value={githubUsername}
              onChange={(e) => setValues((prev) => ({ ...prev, githubUsername: e.target.value }))}
            />
          </InputGroup>
          <FieldDescription>Used to generate your GitHub streak card</FieldDescription>
        </Field>

        {/* Theme picker */}
        <Field>
          <FieldLabel>Theme</FieldLabel>
          <div className="flex flex-wrap gap-2">
            {STREAK_THEMES.map((theme) => (
              <button
                key={theme.value}
                type="button"
                onClick={() => setValues((prev) => ({ ...prev, streakStatsTheme: theme.value }))}
                className={cn(
                  'rounded-md border px-3 py-1.5 text-sm transition-colors cursor-pointer',
                  streakStatsTheme === theme.value
                    ? 'border-primary bg-primary/10 text-primary font-medium'
                    : 'border-input text-muted-foreground hover:border-foreground hover:text-foreground',
                )}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </Field>
      </div>
    </ProfileCard>
  );
}
