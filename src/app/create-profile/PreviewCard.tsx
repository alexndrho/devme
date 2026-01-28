import { marked } from "marked";
import { useClipboard } from "@mantine/hooks";

import { Card, CardContent } from "@/components/ui/card";
import generateProfileMarkdown from "@/utils/profile";
import { type INITIAL_PROFILE_FORM_VALUES } from "@/constant/profile-form";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export interface PreviewCardProps {
  values?: typeof INITIAL_PROFILE_FORM_VALUES;
}

export default function PreviewCard({ values }: PreviewCardProps) {
  const formatttedMarkdown = generateProfileMarkdown(values);
  const clipboard = useClipboard();

  return (
    <Card className="flex-1">
      <CardContent>
        <div className="pb-4 flex justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => clipboard.copy(formatttedMarkdown)}
              >
                {clipboard.copied ? <Check /> : <Copy />}
              </Button>
            </TooltipTrigger>

            <TooltipContent>Copy to clipboard</TooltipContent>
          </Tooltip>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(formatttedMarkdown),
          }}
          className="markdown-body max-w-full p-0!"
        />
      </CardContent>
    </Card>
  );
}
