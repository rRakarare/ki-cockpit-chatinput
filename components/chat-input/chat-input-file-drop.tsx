import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useChatInputActions } from "@/lib/store";
import { File } from "lucide-react";

import { useState, useEffect, useRef } from "react";

export default function ChatInputFileDrop() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { addFiles } = useChatInputActions();
  const dragCounter = useRef<number>(0);

  useEffect(() => {
    const handleDragEnter = (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current++;
      setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current--;
      if (dragCounter.current === 0) {
        setIsDragging(false);
      }
    };

    const handleDragOver = (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleDrop = (e: DragEvent): void => {
      e.preventDefault();
      e.stopPropagation();
      dragCounter.current = 0;
      setIsDragging(false);

      const files: File[] = e.dataTransfer
        ? Array.from(e.dataTransfer.files)
        : [];
      addFiles(files);
    };

    document.body.addEventListener(
      "dragenter",
      handleDragEnter as EventListener,
    );
    document.body.addEventListener(
      "dragleave",
      handleDragLeave as EventListener,
    );
    document.body.addEventListener("dragover", handleDragOver as EventListener);
    document.body.addEventListener("drop", handleDrop as EventListener);

    return () => {
      document.body.removeEventListener(
        "dragenter",
        handleDragEnter as EventListener,
      );
      document.body.removeEventListener(
        "dragleave",
        handleDragLeave as EventListener,
      );
      document.body.removeEventListener(
        "dragover",
        handleDragOver as EventListener,
      );
      document.body.removeEventListener("drop", handleDrop as EventListener);
    };
  }, [addFiles]);

  return (
    <Dialog open={isDragging} onOpenChange={setIsDragging}>
      <DialogContent className="[&>button]:hidden">
        <DialogHeader className="items-center flex justify-center">
          <DialogTitle className="flex items-center">
            <File className="inline mr-2" />
            Drop Files
          </DialogTitle>
          <DialogDescription>Drop files to add them to chat</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
