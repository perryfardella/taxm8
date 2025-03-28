import { SignUpForm } from "@/components/auth/SignUpForm";
import { Navbar } from "@/components/nav/Navbar";

export const metadata = {
  title: "Sign Up - Taxm8",
  description: "Create your Taxm8 account",
};

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-12 sm:px-6 lg:px-8">
        <SignUpForm />
      </div>
    </>
  );
}
