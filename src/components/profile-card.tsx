import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export interface ProfileCardProps {
  title?: string;
  description?: string;
  previousStep?: () => void;
  nextStep?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function ProfileCard({
  title,
  description,
  previousStep,
  nextStep,
  className,
  children,
}: ProfileCardProps) {
  const justifyClass =
    previousStep && nextStep
      ? "justify-between"
      : previousStep
        ? "justify-start"
        : "justify-end";

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>

        {(previousStep || nextStep) && (
          <div className={`mt-4 flex ${justifyClass}`}>
            {previousStep && (
              <Button variant="outline" onClick={previousStep}>
                <ChevronLeftIcon />
                Previous
              </Button>
            )}

            {nextStep && (
              <Button onClick={nextStep}>
                Next
                <ChevronRightIcon />
              </Button>
            )}
          </div>
        )}
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}
