import { motion } from "motion/react";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Button } from "../ui/button";
import { ArrowUp } from "../animate-ui/icons/arrow-up";
import { useChatInputStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function ChatInputSend() {
  // const { expanded } = useChatInputStore();

  return (
    <motion.div layout="position" className={cn("ml-auto")}>
      <AnimateIcon animateOnHover>
        <Button size={"icon"} className="cursor-pointer rounded-full">
          <ArrowUp />
        </Button>
      </AnimateIcon>
    </motion.div>
  );
}

export default ChatInputSend;
