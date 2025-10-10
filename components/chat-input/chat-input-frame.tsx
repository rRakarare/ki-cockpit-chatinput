import { motion, LayoutGroup } from "motion/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ChatInputFrame({ children }: Props) {
  return (
    <LayoutGroup>
      <motion.div
        layout
        initial={false}
        onClick={(e) => e.currentTarget.querySelector("textarea")?.focus()}
        className="cursor-text overflow-hidden w-full max-w-[700px] px-4 py-3 border rounded-3xl h-auto focus-within:ring hover:ring ring-primary/20 transition-[box-shadow] duration-200"
      >
        {children}
      </motion.div>
    </LayoutGroup>
  );
}

export default ChatInputFrame;
