import { useRef } from "react";
import { CommandItem } from "../ui/command";
import { Paperclip } from "lucide-react";
import { useChatInputActions } from "@/lib/store";

function ChatInputFileUpload() {
  const { addFiles } = useChatInputActions();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    addFiles(files);
  };

  const handleClick = (): void => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />
      <CommandItem onSelect={handleClick}>
        <Paperclip />
        <span>Upload file</span>
      </CommandItem>
    </>
  );
}

export default ChatInputFileUpload;
