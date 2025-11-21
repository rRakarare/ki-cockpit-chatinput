import { motion } from "motion/react";
import { TextareaAutosize } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useChatInputActions, useChatInputStore } from "@/lib/store";

function ChatInputMessage() {
  const { expanded } = useChatInputStore();
  const { addFiles } = useChatInputActions();

  return (
    <motion.div
      layout="position"
      layoutDependency={expanded}
      className={cn("", expanded && "col-span-3 col-start-1 row-start-1")}
    >
      <TextareaAutosize
        className="resize-none h-9"
        minRows={1}
        maxRows={9}
        placeholder="Was möchtest du wissen?"
      />
    </motion.div>
  );
}

export default ChatInputMessage;
