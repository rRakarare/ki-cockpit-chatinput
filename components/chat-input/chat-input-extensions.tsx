import { useChatInputActions, useChatInputStore } from "@/lib/store";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Folder, Globe, Lightbulb, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { ComponentType } from "react";

function ChatInputExtensions() {
  const { reasoning, webBrowsing, knowledge } = useChatInputStore();
  const { setReasoning, setWebBrowsing, setKnowledge } = useChatInputActions();

  return (
    <>
      <AnimatePresence>
        {knowledge !== null && (
          <Extension
            icon={Folder}
            onClick={() => setKnowledge(null)}
            label={knowledge.name}
            withLabel
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {reasoning !== null && (
          <Extension
            icon={reasoning === "extended" ? Lightbulb : Zap}
            onClick={() => setReasoning(null)}
            label={
              reasoning === "extended" ? "Detailed thinking" : "Fast thinking"
            }
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {webBrowsing && (
          <Extension
            icon={Globe}
            onClick={() => setWebBrowsing(false)}
            label="web"
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatInputExtensions;

interface ExtensionProps {
  label: string;
  icon: ComponentType<{ className?: string }>;
  onClick: () => void;
  withLabel?: boolean;
}

const Extension = (item: ExtensionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={item.onClick}
            variant="outline"
            className="rounded-full cursor-pointer group flex gap-0"
          >
            <item.icon />
            {item.withLabel && (
              <span className="ml-2 max-w-[90px] truncate inline-block">
                {item.label}
              </span>
            )}
            <X className="size-0 group-hover:size-4 duration-75 group-hover:ml-1" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{item.label}</p>
        </TooltipContent>
      </Tooltip>
    </motion.div>
  );
};
