import { useChatInputActions } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useGlobalDrag } from "@/hooks/use-global-drag";
import { Upload } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function ChatInputFileDrop() {
  const { addFiles } = useChatInputActions();
  const { isGlobalDrag, resetDragState } = useGlobalDrag();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      addFiles(acceptedFiles);
      resetDragState();
    },
    [addFiles, resetDragState],
  );

  const { getRootProps, isDragAccept } = useDropzone({ onDrop });

  if (!isGlobalDrag) {
    return null;
  }

  return (
    <div
      {...getRootProps()}
      className={cn(
        "absolute inset-0 z-50 flex items-center justify-center border-2 border-dashed rounded-3xl bg-background/30 backdrop-blur-xs duration-300",
        isDragAccept && "border-primary ",
      )}
    >
      <div className="flex items-center gap-2 pointer-events-none">
        <Upload className="size-4" />
        <span className="">Drop files here</span>
      </div>
    </div>
  );
}
