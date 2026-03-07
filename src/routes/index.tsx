import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '#/components/ui/button';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <>
      <div className="container min-h-96 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Create and customize your GitHub profile in minutes.</h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Build a clean GitHub profile README in a few clicks!
        </p>

        <div className="mt-4 flex gap-4">
          <Button variant="outline" size="lg" asChild>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexndrho/devme">
              Repository
            </a>
          </Button>

          <Button size="lg">
            <Link to="/create-profile">Create Profile</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
