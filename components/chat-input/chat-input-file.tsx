import { motion } from "motion/react";
import { useChatInputActions, type FileWithMetadata } from "@/lib/store";
import { Button } from "../ui/button";

function ChatInputFile({ name, id }: FileWithMetadata) {
  const { removeFile } = useChatInputActions();

  return (
    <motion.div
      transition={{ duration: 0.1 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Button onClick={() => removeFile(id)} variant="outline">
        {name}
      </Button>
    </motion.div>
  );
}

export default ChatInputFile;
