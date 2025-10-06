"use client";
import ChatInputMessage from "./chat-input-message";
import ChatInputSend from "./chat-input-send";
import ChatInputSettings from "./chat-input-settings";

function ChatInput() {
  return (
    <div
      onClick={(e) => e.currentTarget.querySelector("textarea")?.focus()}
      className="cursor-text w-full max-w-[700px] px-4 py-3 border rounded-3xl h-auto focus-within:ring hover:ring ring-primary/20 duration-200"
    >
      <div className="flex flex-wrap gap-4">
        <ChatInputSettings />
        <ChatInputMessage />
        <ChatInputSend />
      </div>
    </div>
  );
}

export default ChatInput;
