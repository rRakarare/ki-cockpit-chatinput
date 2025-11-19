import { useChatInputActions, useChatInputStore } from "@/lib/store";
import { Button } from "../ui/button";
import { ClockFading, Globe, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function ChatInputExtensions() {
  const { reasoning, webBrowsing } = useChatInputStore();
  const { setReasoning, setWebBrowsing } = useChatInputActions();

  return (
    <>
      <AnimatePresence>
        {reasoning && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button
              onClick={() => setReasoning(null)}
              variant="outline"
              className="rounded-full cursor-pointer group flex gap-0"
            >
              <ClockFading />
              <span className="ml-1">Thinking</span>
              <X className="size-0 group-hover:size-4 duration-75 group-hover:ml-1" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatInputExtensions;
