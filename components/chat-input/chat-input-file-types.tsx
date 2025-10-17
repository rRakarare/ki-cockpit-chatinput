import type { FileWithMetadata } from "@/lib/store";
import { File, FileSpreadsheet, FileText, FileType } from "lucide-react";

export function ChatInputFilePdf({ file }: { file: FileWithMetadata }) {
  return (
    <div className="flex gap-2 justify-between items-center h-full p-2">
      <File className="shrink-0 size-8 border rounded-full bg-red-100 p-2" />
      <div className="w-full">
        <span className="line-clamp-1">{file.name}</span>
        <span className="text-xs text-muted-foreground">{file.type}</span>
      </div>
    </div>
  );
}

export function ChatInputFileXlsx({ file }: { file: FileWithMetadata }) {
  return (
    <div className="flex gap-2 justify-between items-center h-full p-2">
      <FileSpreadsheet className="shrink-0 size-8 border rounded-full bg-emerald-100 p-2" />
      <div className="w-full">
        <span className="line-clamp-1">{file.name}</span>
        <span className="text-xs text-muted-foreground">{file.type}</span>
      </div>
    </div>
  );
}

export function ChatInputFileDoc({ file }: { file: FileWithMetadata }) {
  return (
    <div className="flex gap-2 justify-between items-center h-full p-2">
      <FileText className="shrink-0 size-8 border rounded-full bg-blue-100 p-2" />
      <div className="w-full">
        <span className="line-clamp-1">{file.name}</span>
        <span className="text-xs text-muted-foreground">{file.type}</span>
      </div>
    </div>
  );
}

export function ChatInputFileTxt({ file }: { file: FileWithMetadata }) {
  return (
    <div className="flex gap-2 justify-between items-center h-full p-2">
      <FileType className="shrink-0 size-8 border rounded-full bg-accent p-2" />
      <div className="w-full">
        <span className="line-clamp-1">{file.name}</span>
        <span className="text-xs text-muted-foreground">{file.type}</span>
      </div>
    </div>
  );
}

export function ChatInputFileImage({ file }: { file: FileWithMetadata }) {
  console.log(file);
  return (
    <div className="w-full h-full rounded-md overflow-hidden">
      <img
        src={file.preview}
        alt="Preview"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
