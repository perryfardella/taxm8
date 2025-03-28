// API client for chat functionality
export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function sendMessage(
  messages: ChatMessage[],
  onChunk: (chunk: string) => void
): Promise<void> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok || !response.body) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      onChunk(chunk);
    }
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
}
