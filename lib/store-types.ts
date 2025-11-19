export const fileTypes = [
  "pdf",
  "png",
  "jpg",
  "svg",
  "txt",
  "xlsx",
  "doc",
] as const;

export type FileType = (typeof fileTypes)[number] | string;

export interface FileWithMetadata {
  id: string;
  file: File;
  name: string;
  size: number;
  type: FileType;
  preview: string;
}

export const models = ["gpt-5", "claude-4.5", "gemini-pro", "custom"] as const;
export type Model = (typeof models)[number];

export const styleModes = ["creative", "analytical"] as const;
export type StyleMode = (typeof styleModes)[number] | null;

export const reasoningModes = ["standard", "extended"] as const;
export type ReasoningMode = (typeof reasoningModes)[number] | null;

export const detailLevels = ["detailed"] as const;
export type DetailLevel = (typeof detailLevels)[number] | null;

export interface StoreState {
  files: FileWithMetadata[];
  reasoning: ReasoningMode;
  style: StyleMode;
  detailLevel: DetailLevel;
  webBrowsing: boolean;
  model: Model;

  actions: {
    setReasoning: (value: ReasoningMode) => void;
    setStyle: (value: StyleMode) => void;
    setDetailLevel: (value: DetailLevel) => void;
    setWebBrowsing: (value?: boolean) => void;
    addFiles: (files: File[]) => void;
    removeFile: (id: string) => void;
    setModel: (model: Model) => void;
  };
}
