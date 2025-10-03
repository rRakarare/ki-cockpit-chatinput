import { create } from "zustand";
import { useShallow } from "zustand/shallow";

interface FileWithMetadata {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  preview: string;
}

interface State {
  files: FileWithMetadata[];

  actions: {
    addFile: (file: File) => void;
    addFiles: (files: File[]) => void;
    removeFile: (id: string) => void;
  };
}

const initialState: Omit<State, "actions"> = {
  files: [],
};

const useStore = create<State>()((set, get) => ({
  ...initialState,

  actions: {
    addFile: (file: File) =>
      set((state) => ({
        files: [
          ...state.files,
          {
            id: crypto.randomUUID(),
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            preview: URL.createObjectURL(file),
          },
        ],
      })),
    addFiles: (files: File[]) =>
      set((state) => ({
        files: [
          ...state.files,
          ...files.map((file) => ({
            id: crypto.randomUUID(),
            file,
            name: file.name,
            size: file.size,
            type: file.type,
            preview: URL.createObjectURL(file),
          })),
        ],
      })),
    removeFile: (id: string) =>
      set((state) => {
        const fileToRemove = state.files.find((f) => f.id === id);
        if (fileToRemove?.preview) {
          URL.revokeObjectURL(fileToRemove.preview);
        }
        return {
          files: state.files.filter((f) => f.id !== id),
        };
      }),
  },
}));

export const useChatInputStore = () =>
  useStore(
    useShallow((state) => ({
      files: state.files,
    }))
  );

export const useChatInputActions = () => useStore((state) => state.actions);
