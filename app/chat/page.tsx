import { Chat } from "@/app/components/Chat";
import { Navbar } from "@/components/nav/Navbar";

export const metadata = {
  title: "Chat with Taxm8 - Your AI Tax Assistant",
  description:
    "Get real-time, accurate guidance for navigating the Australian tax system",
};

export default function ChatPage() {
  return (
    <>
      <Navbar />
      <div className="container flex flex-col max-w-4xl px-4 py-6">
        <h1 className="mb-2 text-2xl font-bold text-center">Chat with Taxm8</h1>
        <p className="mb-4 text-center text-muted-foreground">
          Ask any question about Australian taxation and get accurate,
          up-to-date answers based on ATO guidelines.
        </p>
        <Chat />
      </div>
    </>
  );
}
