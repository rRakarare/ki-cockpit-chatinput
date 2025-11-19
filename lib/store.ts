import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import mime from "mime";
import type { StoreState } from "./store-types";

export const initialState: Omit<StoreState, "actions"> = {
  files: [],
  reasoning: null,
  style: null,
  detailLevel: null,
  webBrowsing: true,
  model: "gpt-5",
};

const isExpanded = (state: Omit<StoreState, "actions">): boolean => {
  return state.reasoning !== initialState.reasoning;
};

const useStore = create<StoreState>()((set, get) => ({
  ...initialState,

  actions: {
    setReasoning: (value) =>
      set(() => ({
        reasoning: value,
      })),
    setStyle: (value) =>
      set(() => ({
        style: value,
      })),
    setDetailLevel: (value) =>
      set(() => ({
        detailLevel: value,
      })),
    setWebBrowsing: (value) =>
      set((state) => ({
        webBrowsing: value !== undefined ? value : !state.webBrowsing,
      })),
    setModel: (model) => set(() => ({ model })),
    addFiles: (files) =>
      set((state) => ({
        files: [
          ...state.files,
          ...files.map((file) => {
            const type = mime.getExtension(file.type) || "";
            return {
              id: crypto.randomUUID(),
              file,
              name: file.name,
              size: file.size,
              type: type,
              preview: URL.createObjectURL(file),
            };
          }),
        ],
      })),
    removeFile: (id) =>
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
      reasoning: state.reasoning,
      detailLevel: state.detailLevel,
      style: state.style,
      webBrowsing: state.webBrowsing,
      model: state.model,
      expanded: isExpanded(state),
    }))
  );

export const useChatInputActions = () => useStore((state) => state.actions);
