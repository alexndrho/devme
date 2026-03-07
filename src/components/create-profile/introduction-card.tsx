import { INITIAL_PROFILE_FORM_VALUES } from '#/constants/profile-form';
import ProfileCard from './profile-card';
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSet } from '../ui/field';
import { Input } from '../ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '../ui/input-group';
import { Textarea } from '../ui/textarea';
import type { ProfileFormCardProps } from './types';

export default function IntroductionCard({
  values,
  setValues,
  ...props
}: Omit<ProfileFormCardProps, 'previousPage'>) {
  const safeValues = { ...INITIAL_PROFILE_FORM_VALUES, ...(values ?? {}) };

  return (
    <ProfileCard title="Introduction" description="Tell us about yourself" {...props}>
      <FieldGroup>
        <FieldSet>
          <Field>
            <FieldLabel htmlFor="input-name">Hi! My name is:</FieldLabel>
            <Input
              id="input-name"
              value={safeValues.name}
              placeholder="Your Name"
              onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-subtitle">Subtitle:</FieldLabel>
            <Input
              id="input-subtitle"
              value={safeValues.subtitle}
              placeholder="Your Subtitle"
              onChange={(e) => setValues((prev) => ({ ...prev, subtitle: e.target.value }))}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="textarea-message">Description:</FieldLabel>
            <Textarea
              id="textarea-message"
              placeholder="Type your message here."
              value={safeValues.description}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </Field>
        </FieldSet>

        <FieldSet>
          <FieldLegend>About me</FieldLegend>

          <Field>
            <FieldLabel htmlFor="input-based-in">🌎 I&apos;m based in:</FieldLabel>
            <Input
              id="input-based-in"
              value={safeValues.basedIn}
              placeholder="City, Country"
              onChange={(e) => setValues((prev) => ({ ...prev, basedIn: e.target.value }))}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-portfolio-name">🔗 My portfolio:</FieldLabel>
            <Input
              id="input-portfolio-name"
              value={safeValues.portfolioName}
              placeholder="Your Portfolio Name"
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  portfolioName: e.target.value,
                }))
              }
            />

            <InputGroup>
              <InputGroupInput
                id="input-group-url"
                placeholder="example.com"
                value={safeValues.portfolioUrl}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    portfolioUrl: e.target.value,
                  }))
                }
              />
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="input-contact-email">📫 Contact me at:</FieldLabel>
            <Input
              id="input-contact-email"
              value={safeValues.contactEmail}
              placeholder="name@example.com"
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  contactEmail: e.target.value,
                }))
              }
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-working-on">What I&apos;m working on:</FieldLabel>

            <Input
              id="input-working-on"
              placeholder="Project Name"
              value={safeValues.workingOnName}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  workingOnName: e.target.value,
                }))
              }
            />

            <InputGroup className="mt-2">
              <InputGroupInput
                id="input-working-on-url"
                placeholder="example.com"
                value={safeValues.workingOnUrl}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    workingOnUrl: e.target.value,
                  }))
                }
              />
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <Field>
            <FieldLabel htmlFor="input-learning">📚 I&apos;m currently learning:</FieldLabel>
            <Input
              id="input-learning"
              placeholder="Rust, Svelte, UI design..."
              value={safeValues.learning}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  learning: e.target.value,
                }))
              }
            />

            <FieldLabel htmlFor="input-collaborating-on" className="mt-4">
              🤝 I&apos;m open to collaborate on:
            </FieldLabel>
            <Input
              id="input-collaborating-on"
              placeholder="Open source, startup idea..."
              value={safeValues.collaboratingOn}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  collaboratingOn: e.target.value,
                }))
              }
            />

            <FieldLabel htmlFor="input-anything-else" className="mt-4">
              💬 Anything else I&apos;d like to share:
            </FieldLabel>
            <Input
              id="input-anything-else"
              placeholder="Anything else you'd like to share"
              value={safeValues.anythingElse}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  anythingElse: e.target.value,
                }))
              }
            />
          </Field>
        </FieldSet>
      </FieldGroup>
    </ProfileCard>
  );
}
