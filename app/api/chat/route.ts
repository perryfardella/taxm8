import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request body. Messages array is required." },
        { status: 400 }
      );
    }

    // Convert to OpenAI message format
    const openaiMessages = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Add system message
    openaiMessages.unshift({
      role: "system",
      content:
        "You are Taxm8, a helpful, professional AI tax assistant for Australians. Provide accurate information about Australian taxation. If you're unsure, acknowledge the limitations and avoid providing incorrect information.",
    });

    // For streaming responses
    const encoder = new TextEncoder();
    const stream = new TransformStream();
    const writer = stream.writable.getWriter();

    // Start streaming response
    const openaiStream = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      // TODO: Switch to GPT-4-turbo in prod
      // model: "gpt-4-turbo",
      messages: openaiMessages,
      temperature: 0.7,
      stream: true,
    });

    // Stream the response
    (async () => {
      try {
        for await (const chunk of openaiStream) {
          const content = chunk.choices[0]?.delta?.content || "";
          await writer.write(encoder.encode(content));
        }
      } catch (error) {
        console.error("Streaming error:", error);
      } finally {
        await writer.close();
      }
    })();

    return new NextResponse(stream.readable);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
