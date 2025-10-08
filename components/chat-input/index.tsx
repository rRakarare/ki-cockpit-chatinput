"use client";
import ChatInputMessage from "./chat-input-message";
import ChatInputSend from "./chat-input-send";
import ChatInputSettings from "./chat-input-settings";
import ChatInputFrame from "./chat-input-frame";

function ChatInput() {
  return (
    <ChatInputFrame>
      <div className="flex flex-wrap gap-4">
        <ChatInputSettings />
        <ChatInputMessage />
        <ChatInputSend />
      </div>
    </ChatInputFrame>
  );
}

export default ChatInput;
