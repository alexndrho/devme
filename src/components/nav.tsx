"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import logoSvg from "@/assets/profile-line.svg";

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="container mx-auto p-2 flex justify-between items-center">
      <Button variant="ghost" size="lg" asChild>
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoSvg}
            alt="DevMe logo"
            width={24}
            height={24}
            className={resolvedTheme === "dark" ? "invert" : ""}
          />
          DevMe
        </Link>
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? <Moon /> : <Sun />}
      </Button>
    </header>
  );
}
