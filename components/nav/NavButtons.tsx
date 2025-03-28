"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { UserButton } from "@/components/auth/UserButton";

export function NavButtons() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="w-24 rounded h-9 animate-pulse bg-muted"></div>;
  }

  if (user) {
    return (
      <>
        <Button asChild size="sm" className="md:size-default">
          <Link href="/chat">Start Chatting</Link>
        </Button>
        <UserButton />
      </>
    );
  }

  return (
    <>
      <Button variant="outline" size="sm" className="md:size-default" asChild>
        <Link href="/sign-in">Log in</Link>
      </Button>
      <Button size="sm" className="md:size-default" asChild>
        <Link href="/sign-up">Get Started</Link>
      </Button>
    </>
  );
}
