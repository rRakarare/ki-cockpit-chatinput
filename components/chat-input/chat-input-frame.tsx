import { motion, LayoutGroup } from "motion/react";
import { ReactNode } from "react";

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
        <div
          className="
          grid grid-cols-[auto_minmax(0,_1fr)_auto] grid-rows-[auto_auto] gap-x-4 justify-between items-end"
        >
          {children}
        </div>
      </motion.div>
    </LayoutGroup>
  );
}

export default ChatInputFrame;
