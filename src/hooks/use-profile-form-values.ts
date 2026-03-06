import { useLocalStorage } from '@mantine/hooks';
import type { Dispatch, SetStateAction } from 'react';
import type { ProfileFormValues } from '#/constants/profile-form';

import { INITIAL_PROFILE_FORM_VALUES } from '#/constants/profile-form';

export function useProfileFormValues() {
  return useLocalStorage({
    key: 'create-profile-form',
    defaultValue: INITIAL_PROFILE_FORM_VALUES,
  });
}

export type SetProfileFormValues = Dispatch<SetStateAction<ProfileFormValues>>;
