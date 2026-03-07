import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export interface ProfileCardProps {
  title?: string;
  description?: string;
  previousPage?: () => void;
  nextPage?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function ProfileCard({
  title,
  description,
  previousPage,
  nextPage,
  className,
  children,
}: ProfileCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>

        {(previousPage || nextPage) && (
          <div
            className={cn(
              'mt-4 flex gap-4',
              previousPage && nextPage
                ? 'justify-between'
                : previousPage
                  ? 'justify-start'
                  : 'justify-end',
            )}
          >
            {previousPage && (
              <Button variant="outline" onClick={previousPage}>
                <ChevronLeftIcon />
                Previous
              </Button>
            )}

            {nextPage && (
              <Button onClick={nextPage}>
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
