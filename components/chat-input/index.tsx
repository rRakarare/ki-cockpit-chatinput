"use client";
import { motion } from "motion/react";
import ChatInputMessage from "./chat-input-message";
import ChatInputSend from "./chat-input-send";
import ChatInputSettings from "./chat-input-settings";
import ChatInputFrame from "./chat-input-frame";
import ChatInputExtensions from "./chat-input-extensions";
import ChatInputModel from "./chat-input-model";
import ChatInputFiles from "./chat-input-files";

function ChatInput() {
  return (
    <ChatInputFrame>
      <motion.div layout="position">
        <ChatInputFiles />
      </motion.div>
      <div
        className="
          grid grid-cols-[auto_minmax(0,_1fr)_auto] grid-rows-[auto_auto] gap-x-4 justify-between items-end"
      >
        <div className="flex items-center gap-2">
          <motion.div layout="position" className="flex items-center space-x-2">
            <ChatInputSettings />
            <ChatInputExtensions />
          </motion.div>
        </div>
        <ChatInputMessage />

        <motion.div
          layout="position"
          className="col-start-3 flex items-center space-x-2 justify-end"
        >
          <motion.div layout={false}>
            <ChatInputModel />
          </motion.div>
          <ChatInputSend />
        </motion.div>
      </div>
    </ChatInputFrame>
  );
}

export default ChatInput;
