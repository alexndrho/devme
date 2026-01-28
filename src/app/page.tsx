import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="container min-h-96 mx-auto px-2 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          Create and customize your GitHub profile in minutes.
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Build a clean GitHub profile README in a few clicks!
        </p>

        <div className="mt-4 flex gap-2">
          <Button variant="outline" size="lg" asChild>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/alexndrho/devme"
            >
              Repository
            </Link>
          </Button>

          <Button size="lg" asChild>
            <Link href="/create-profile">Create Profile</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
