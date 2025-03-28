"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { sendMessage, ChatMessage } from "@/components/ChatService";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on load
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message to the chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Add initial assistant message for streaming
    const aiMessageId = (Date.now() + 1).toString();
    const aiMessage: Message = {
      id: aiMessageId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMessage]);

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
      // Update the message with error
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

  return (
    <Card className="w-full max-w-4xl mx-auto h-[80vh] flex flex-col">
      <CardHeader className="px-4 py-3 border-b">
        <Alert variant="default" className="bg-muted">
          <InfoIcon className="w-4 h-4" />
          <AlertDescription>
            Disclaimer: This is for general information only. Taxm8 is not a
            registered tax agent.
          </AlertDescription>
        </Alert>
      </CardHeader>
      <CardContent className="flex-1 p-4 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full p-8 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Welcome to Taxm8</h3>
                <p className="text-muted-foreground">
                  Ask any question about Australian taxes and get instant,
                  accurate answers powered by AI and grounded in official ATO
                  documentation.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex gap-3 max-w-[80%] ${
                      message.role === "user" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <Avatar className="w-8 h-8">
                      <div className="flex items-center justify-center w-full h-full text-xs font-medium bg-primary text-primary-foreground">
                        {message.role === "user" ? "YOU" : "AI"}
                      </div>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {message.content ||
                        (message.role === "assistant" && isLoading
                          ? "..."
                          : "")}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            ref={inputRef}
            placeholder="Ask a tax question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading || !input.trim()}>
            <Send className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
