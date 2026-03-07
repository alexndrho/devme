import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { useProfileFormValues } from '#/hooks/use-profile-form-values';
import IntroductionCard from '#/components/create-profile/introduction-card';
import PreviewCard from '#/components/create-profile/preview-card';
import SkillsCard from '#/components/create-profile/skills-card';

export const Route = createFileRoute('/create-profile')({ component: CreateProfile });

function CreateProfile() {
  const [profileFormValues, setProfileFormValues] = useProfileFormValues();
  const [activeProfile, setActiveProfile] = useState(1);

  const previousPage = () => setActiveProfile((current) => (current > 1 ? current - 1 : current));
  const nextPage = () => setActiveProfile((current) => (current < 2 ? current + 1 : current));

  return (
    <div className="container mx-auto p-2 flex flex-col md:flex-row gap-2">
      {activeProfile === 1 ? (
        <IntroductionCard
          values={profileFormValues}
          setValues={setProfileFormValues}
          nextPage={nextPage}
          className="flex-1"
        />
      ) : (
        <SkillsCard
          values={profileFormValues}
          setValues={setProfileFormValues}
          previousPage={previousPage}
          className="flex-1"
        />
      )}

      <PreviewCard values={profileFormValues} />
    </div>
  );
}
