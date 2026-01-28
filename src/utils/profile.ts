import { type INITIAL_PROFILE_FORM_VALUES } from "@/constant/profile-form";

export default function generateProfileMarkdown(
  values?: typeof INITIAL_PROFILE_FORM_VALUES,
) {
  if (!values) return "";

  const lines: string[] = [];

  if (values.name) lines.push(`# Hi! My name is ${values.name}`);
  if (values.subtitle) lines.push(`## ${values.subtitle}`);
  if (values.description) lines.push(values.description);
  if (values.basedIn) lines.push(`- 🌎 I'm based in ${values.basedIn}`);
  if (values.portfolioName && values.portfolioUrl)
    lines.push(
      `- 🔗 Check my website at [${values.portfolioName}](https://${values.portfolioUrl})`,
    );
  if (values.contactEmail)
    lines.push(
      `- 📫 You can reach me at [${values.contactEmail}](mailto:${values.contactEmail})`,
    );
  if (values.workingOnName && values.workingOnUrl)
    lines.push(
      `- 🛠️ I'm currently working on [${values.workingOnName}](https://${values.workingOnUrl})`,
    );
  if (values.learning) lines.push(`- 📚 I'm learning ${values.learning}`);
  if (values.collaboratingOn)
    lines.push(`- 🤝 I'm open to collaborating on ${values.collaboratingOn}`);
  if (values.anythingElse)
    lines.push(`- ⚡ Anything else I'd like to share ${values.anythingElse}`);

  return lines.join("\n");
}
