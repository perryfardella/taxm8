"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { UserButton } from "../auth/UserButton";
import { useAuth } from "@/contexts/AuthContext";

export function Navbar() {
  const { user, isLoading } = useAuth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Taxm8</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? <UserButton /> : null}
        </div>
      </div>
    </header>
  );
}
