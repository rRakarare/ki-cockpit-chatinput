import { motion } from "motion/react";
import { useChatInputActions, type FileWithMetadata } from "@/lib/store";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import {
  ChatInputFileDoc,
  ChatInputFileImage,
  ChatInputFilePdf,
  ChatInputFileTxt,
  ChatInputFileXlsx,
} from "./chat-input-file-types";

function ChatInputFile({ file }: { file: FileWithMetadata }) {
  const { removeFile } = useChatInputActions();

  return (
    <motion.div
      transition={{ duration: 0.1 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="relative group text-sm border max-w-[250px] h-14 justify-between rounded-md hover:bg-accent cursor-pointer">
        <Button
          onClick={() => removeFile(file.id)}
          className="!p-1 h-auto rounded-full absolute -top-2 -right-2 cursor-pointer scale-0 group-hover:scale-100"
          variant={"outline"}
        >
          <X />
        </Button>
        {(() => {
          switch (file.type) {
            case "pdf":
              return <ChatInputFilePdf file={file} />;
            case "xlsx":
              return <ChatInputFileXlsx file={file} />;
            case "doc":
              return <ChatInputFileDoc file={file} />;
            case "txt":
              return <ChatInputFileTxt file={file} />;
            case "png":
            case "jpg":
              return <ChatInputFileImage file={file} />;

            default:
              return null;
          }
        })()}
      </div>
    </motion.div>
  );
}

export default ChatInputFile;
