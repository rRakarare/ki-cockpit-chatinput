import { motion } from "motion/react";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useChatInputStore } from "@/lib/store";

function ChatInputMessage() {
  const { expanded } = useChatInputStore();

  return (
    <motion.div
      layout
      className={cn(expanded ? "flex-1 basis-full order-first" : "flex-1")}
    >
      <Textarea
        placeholder="Was möchtest du wissen?"
        className="resize-none min-h-8 max-h-full px-1"
      />
    </motion.div>
  );
}

export default ChatInputMessage;
