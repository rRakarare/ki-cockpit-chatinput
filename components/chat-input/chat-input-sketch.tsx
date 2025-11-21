"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useChatInputActions } from "@/lib/store";
import {
  ReactSketchCanvas,
  type ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { useRef } from "react";
import { CommandItem } from "../ui/command";
import { SquarePen } from "lucide-react";
import { Button } from "../ui/button";

function ChatInputSketch() {
  const canvasRef = useRef<ReactSketchCanvasRef | null>(null);
  const { addFiles } = useChatInputActions();

  const handleExportToFile = async () => {
    if (canvasRef.current) {
      try {
        // 1. Export image as base64 string
        const base64Image = await canvasRef.current.exportImage("png");

        // 2. Convert base64 to Blob
        const base64Data = base64Image.split(",")[1];
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: "image/png" });

        // 3. Convert Blob to File
        const file = new File([blob], `drawing_${Date.now()}.png`, {
          type: "image/png",
          lastModified: Date.now(),
        });

        // 4. Pass to your addFiles function
        addFiles([file]);
      } catch (error) {
        console.error("Export failed:", error);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <CommandItem>
          <SquarePen />
          <span>Sketch</span>
        </CommandItem>
      </DialogTrigger>
      <DialogContent className="w-[900px]">
        <DialogHeader>
          <DialogTitle>Sketch your ideas</DialogTitle>
          <DialogDescription>
            Just start sketching your ideas.
          </DialogDescription>
        </DialogHeader>

        <ReactSketchCanvas
          ref={canvasRef}
          width="100%"
          height="350px"
          canvasColor="transparent"
          strokeColor="#000000"
        />
        <Button onClick={handleExportToFile}>Done</Button>
      </DialogContent>
    </Dialog>
  );
}

export default ChatInputSketch;
