"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Send,
  User,
  Bot,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChatMessage } from "@/components/ChatService";
import { sendMessage } from "@/components/ChatService";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi there! I'm Taxm8, your AI tax assistant for Australia. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    // Add initial assistant message for streaming
    const aiMessageId = (Date.now() + 1).toString();
    const aiMessage: Message = {
      id: aiMessageId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Convert messages to API format
      const apiMessages: ChatMessage[] = messages
        .concat(userMessage)
        .map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

      // Stream the response
      await sendMessage(apiMessages, (chunk) => {
        setMessages((prev) => {
          const updatedMessages = [...prev];
          const aiMessageIndex = updatedMessages.findIndex(
            (msg) => msg.id === aiMessageId
          );

          if (aiMessageIndex !== -1) {
            updatedMessages[aiMessageIndex] = {
              ...updatedMessages[aiMessageIndex],
              content: updatedMessages[aiMessageIndex].content + chunk,
            };
          }

          return updatedMessages;
        });
      });
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => {
        const updatedMessages = [...prev];
        const aiMessageIndex = updatedMessages.findIndex(
          (msg) => msg.id === aiMessageId
        );

        if (aiMessageIndex !== -1) {
          updatedMessages[aiMessageIndex] = {
            ...updatedMessages[aiMessageIndex],
            content:
              "Sorry, I couldn't process your request. Please try again.",
          };
        }

        return updatedMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-16rem)]">
      <Card className="flex-1 overflow-hidden">
        <CardContent className="flex flex-col h-full p-4">
          <div className="flex-1 pr-4 space-y-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-3 group",
                  message.role === "user" ? "justify-end" : ""
                )}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-primary/10">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "rounded-lg px-4 py-3 max-w-[85%]",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <div className="whitespace-pre-wrap">
                    {message.content || (message.role === "assistant" && "...")}
                  </div>
                  {message.role === "assistant" && message.content && (
                    <div className="flex items-center justify-between pt-2 mt-2 transition-opacity border-t opacity-0 border-border/40 group-hover:opacity-100">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ThumbsUp className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <ThumbsDown className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() =>
                          copyToClipboard(message.id, message.content)
                        }
                      >
                        {copiedId === message.id ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  )}
                </div>
                {message.role === "user" && (
                  <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full bg-primary/10">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex gap-2 pt-4 mt-2 border-t"
          >
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your tax situation..."
              className="min-h-[50px] max-h-[100px] resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (input.trim()) {
                    handleSubmit(e as any);
                  }
                }
              }}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="shrink-0"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
