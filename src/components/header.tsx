import { Link } from '@tanstack/react-router';

import { Button } from './ui/button';
import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="container mx-auto p-2 flex justify-between items-center">
      <Button variant="ghost" size="lg" asChild>
        <Link to="/" className="flex items-center gap-2">
          DevMe
        </Link>
      </Button>

      <ThemeToggle />
    </header>
  );
}
