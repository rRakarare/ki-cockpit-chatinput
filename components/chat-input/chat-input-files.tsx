import { AnimatePresence, motion } from "motion/react";
import { useChatInputStore } from "@/lib/store";
import ChatInputFileDrop from "./chat-input-file-drop";
import ChatInputFile from "./chat-input-file";

function ChatInputFiles() {
  const { files } = useChatInputStore();

  const hasFiles = files.length > 0;

  return (
    <>
      <ChatInputFileDrop />
      {hasFiles && (
        <div className="flex gap-2 flex-wrap pb-3">
          <AnimatePresence>
            {files.map((file) => (
              <ChatInputFile key={file.id} {...file} />
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

export default ChatInputFiles;
