import { motion } from "motion/react";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Button } from "../ui/button";
import { ArrowUp } from "../animate-ui/icons/arrow-up";
import { useChatInputStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function ChatInputSend() {
  const { expanded } = useChatInputStore();

  return (
    <motion.div
      layout
      initial={false}
      className={cn(expanded ? "flex-1 basis-1/3" : "flex-none")}
    >
      <AnimateIcon animateOnHover>
        <Button size={"icon"} className="cursor-pointer rounded-full">
          <ArrowUp />
        </Button>
      </AnimateIcon>
    </motion.div>
  );
}

export default ChatInputSend;
