import { createFileRoute } from '@tanstack/react-router';

import { useProfileFormValues } from '#/hooks/use-profile-form-values';
import IntroductionCard from '#/components/create-profile/introduction-card';
import PreviewCard from '#/components/create-profile/preview-card';

export const Route = createFileRoute('/create-profile')({ component: CreateProfile });

function CreateProfile() {
  const [profileFormValues, setProfileFormValues] = useProfileFormValues();

  return (
    <div className="container mx-auto p-2 flex flex-col md:flex-row gap-2">
      <IntroductionCard
        values={profileFormValues}
        setValues={setProfileFormValues}
        className="flex-1"
      />

      <PreviewCard values={profileFormValues} />
    </div>
  );
}
