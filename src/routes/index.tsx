import { createFileRoute } from '@tanstack/react-router';
import { Button } from '#/components/ui/button';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <>
      <main className="container min-h-96 mx-auto px-2 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Create and customize your GitHub profile in minutes.</h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Build a clean GitHub profile README in a few clicks!
        </p>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="lg" asChild>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexndrho/devme">
              Repository
            </a>
          </Button>

          <Button size="lg">Create Profile</Button>
        </div>
      </main>
    </>
  );
}
