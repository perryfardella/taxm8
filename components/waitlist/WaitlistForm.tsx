"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      console.log("Submitting email:", email); // Debug log

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      console.log("Response status:", response.status); // Debug log

      const data = await response.json();
      console.log("Response data:", data); // Debug log

      if (!response.ok) {
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setMessage(
        data.message || "You're on the list! We'll notify you when we launch."
      );
      setEmail("");
    } catch (error) {
      console.error("Form submission error:", error); // Debug log
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to join waitlist. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 min-[400px]:flex-row"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="min-[400px]:min-w-[300px]"
        disabled={status === "loading" || status === "success"}
      />
      <Button
        type="submit"
        size="lg"
        className="gap-1"
        disabled={status === "loading" || status === "success"}
      >
        {status === "loading" ? (
          "Joining..."
        ) : status === "success" ? (
          "Joined!"
        ) : (
          <>
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
      {message && (
        <p
          className={`text-sm ${
            status === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
