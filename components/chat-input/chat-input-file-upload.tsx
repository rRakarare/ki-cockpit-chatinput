import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useChatInputStore } from "@/lib/store";

function ChatInputFileUpload() {
  const { expanded } = useChatInputStore();

  return (
    <motion.div
      layout="position"
      layoutDependency={expanded}
      className={cn("h-0", expanded && "h-auto")}
    >
      FILES
    </motion.div>
  );
}

export default ChatInputFileUpload;
