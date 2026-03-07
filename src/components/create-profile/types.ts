import type { ProfileFormValues } from '#/constants/profile-form';
import type { SetProfileFormValues } from '#/hooks/use-profile-form-values';

export interface ProfileFormCardProps {
  values?: ProfileFormValues;
  setValues: SetProfileFormValues;
  previousPage?: () => void;
  nextPage?: () => void;
  className?: string;
}
