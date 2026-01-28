import { INITIAL_PROFILE_FORM_VALUES } from "@/constant/profile-form";
import { useLocalStorage } from "@mantine/hooks";

export function useProfileFormValues() {
  return useLocalStorage({
    key: "create-profile-form",
    defaultValue: INITIAL_PROFILE_FORM_VALUES,
  });
}
