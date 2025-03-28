import { Chat } from "@/app/components/Chat";

export const metadata = {
  title: "Chat with Taxm8 - Your AI Tax Assistant",
  description:
    "Get real-time, accurate guidance for navigating the Australian tax system",
};

export default function ChatPage() {
  return (
    <div className="container max-w-6xl py-8">
      <h1 className="mb-6 text-2xl font-bold text-center">Chat with Taxm8</h1>
      <Chat />
    </div>
  );
}
