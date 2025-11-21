"use client";
import { ArrowRight, Eye, Folder, Globe, History, Pencil } from "lucide-react";

import {
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Switch } from "../ui/switch";

import { useChatInputActions, useChatInputStore } from "@/lib/store";
import ChatInputFileUpload from "./chat-input-file-upload";
import type { Tabs } from "./chat-input-settings";
import type { Dispatch, SetStateAction } from "react";
import ChatInputSketch from "./chat-input-sketch";

interface Props {
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsMain({ setTab }: Props) {
  const { setWebBrowsing } = useChatInputActions();
  const { webBrowsing } = useChatInputStore();

  return (
    <>
      <CommandGroup>
        <ChatInputFileUpload />
        <ChatInputSketch />
        <CommandItem onSelect={() => setTab("knowledge")}>
          <Folder />
          <span>Connect knowledge</span>
          <ArrowRight className="ml-auto" />
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup>
        <CommandItem onSelect={() => setTab("reasoning")}>
          <History />
          <span>Reasoning</span>
          <ArrowRight className="ml-auto" />
        </CommandItem>
        <CommandItem onSelect={() => setWebBrowsing()}>
          <Globe />
          <span>Web browsing</span>
          <Switch checked={webBrowsing} className="ml-auto" />
        </CommandItem>
        <CommandItem onSelect={() => setTab("style")}>
          <Pencil />
          <span>Select style</span>
          <ArrowRight className="ml-auto" />
        </CommandItem>
        <CommandItem onSelect={() => setTab("detail")}>
          <Eye />
          <span>Select detail Level</span>
          <ArrowRight className="ml-auto" />
        </CommandItem>
      </CommandGroup>
    </>
  );
}

export default ChatInputSettingsMain;
