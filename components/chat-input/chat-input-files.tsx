import { motion } from "motion/react";
import { TextareaAutosize } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useChatInputStore } from "@/lib/store";
import ChatInputFileDrop from "./chat-input-file-drop";

function ChatInputFiles() {
  const { expanded } = useChatInputStore();

  return (
    <>
      <ChatInputFileDrop />
    </>
  );
}

export default ChatInputFiles;
