"use client";
import { motion } from "motion/react";
import ChatInputMessage from "./chat-input-message";
import ChatInputSend from "./chat-input-send";
import ChatInputSettings from "./chat-input-settings";
import ChatInputFrame from "./chat-input-frame";
import ChatInputExtensions from "./chat-input-extensions";

function ChatInput() {
  return (
    <ChatInputFrame>
      <div className="flex items-center gap-2">
        <motion.div layout="position" className="flex items-center space-x-2">
          <ChatInputSettings />
          <ChatInputExtensions />
        </motion.div>
      </div>
      <ChatInputMessage />
      <ChatInputSend />
    </ChatInputFrame>
  );
}

export default ChatInput;
