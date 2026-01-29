"use client";

import { useProfileFormValues } from "../hooks/use-profile-form-values";
import Introduction from "./introduction";
import PreviewCard from "./preview-card";

export default function CreateProfilePage() {
  const [profileFormValues, setProfileFormValues] = useProfileFormValues();

  return (
    <div className="container mx-auto p-2 flex flex-col md:flex-row gap-2">
      <Introduction
        values={profileFormValues}
        setValues={setProfileFormValues}
        className="flex-1"
      />

      <PreviewCard values={profileFormValues} />
    </div>
  );
}
