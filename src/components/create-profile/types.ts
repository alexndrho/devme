import type { ProfileFormValues } from '#/constants/profile-form';
import type { SetProfileFormValues } from '#/hooks/use-profile-form-values';
import type ProfileCard from './profile-card';

export interface ProfileFormCardProps extends React.ComponentProps<typeof ProfileCard> {
  values?: ProfileFormValues;
  setValues: SetProfileFormValues;
}
