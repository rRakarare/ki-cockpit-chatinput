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
  resoning: boolean;
  webBrowsing: boolean;

  actions: {
    setReasoning: (value?: boolean) => void;
    setWebBrowsing: (value?: boolean) => void;
    addFile: (file: File) => void;
    addFiles: (files: File[]) => void;
    removeFile: (id: string) => void;
  };
}

const initialState: Omit<State, "actions"> = {
  files: [],
  resoning: false,
  webBrowsing: false,
};

const isExpanded = (state: Omit<State, "actions">): boolean => {
  return (
    state.files.length > 0 ||
    state.resoning !== initialState.resoning ||
    state.webBrowsing !== initialState.webBrowsing
  );
};

const useStore = create<State>()((set, get) => ({
  ...initialState,

  actions: {
    setReasoning: (value) =>
      set((state) => ({
        resoning: value !== undefined ? value : !state.resoning,
      })),
    setWebBrowsing: (value) =>
      set((state) => ({
        webBrowsing: value !== undefined ? value : !state.webBrowsing,
      })),
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
      resoning: state.resoning,
      webBrowsing: state.webBrowsing,
      expanded: isExpanded(state),
    }))
  );

export const useChatInputActions = () => useStore((state) => state.actions);
