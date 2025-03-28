import { SignInForm } from "@/components/auth/SignInForm";
import { Navbar } from "@/components/nav/Navbar";

export const metadata = {
  title: "Sign In - Taxm8",
  description: "Sign in to your Taxm8 account",
};

export default function SignInPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12 sm:px-6 lg:px-8">
        <SignInForm />
      </div>
    </>
  );
}
