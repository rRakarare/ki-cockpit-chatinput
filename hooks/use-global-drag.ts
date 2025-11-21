import { useState, useEffect, useCallback } from "react";

interface UseGlobalDragReturn {
  isGlobalDrag: boolean;
  resetDragState: () => void;
}

export function useGlobalDrag(): UseGlobalDragReturn {
  const [isGlobalDrag, setIsGlobalDrag] = useState(false);

  const resetDragState = useCallback(() => {
    setIsGlobalDrag(false);
  }, []);

  useEffect(() => {
    let dragCounter = 0;

    const handleGlobalDragEnter = (e: DragEvent): void => {
      e.preventDefault();
      dragCounter += 1;
      if (dragCounter === 1) {
        setIsGlobalDrag(true);
      }
    };

    const handleGlobalDragLeave = (e: DragEvent): void => {
      e.preventDefault();
      dragCounter -= 1;
      if (dragCounter === 0) {
        setIsGlobalDrag(false);
      }
    };

    const handleGlobalDragOver = (e: DragEvent): void => {
      e.preventDefault(); // Required to allow drop
    };

    const handleGlobalDrop = (e: DragEvent): void => {
      e.preventDefault();
      setIsGlobalDrag(false);
      dragCounter = 0;
    };

    document.addEventListener("dragenter", handleGlobalDragEnter);
    document.addEventListener("dragleave", handleGlobalDragLeave);
    document.addEventListener("dragover", handleGlobalDragOver);
    document.addEventListener("drop", handleGlobalDrop);

    return () => {
      document.removeEventListener("dragenter", handleGlobalDragEnter);
      document.removeEventListener("dragleave", handleGlobalDragLeave);
      document.removeEventListener("dragover", handleGlobalDragOver);
      document.removeEventListener("drop", handleGlobalDrop);
    };
  }, []);

  return { isGlobalDrag, resetDragState };
}
