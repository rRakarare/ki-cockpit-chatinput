"use client";
import { ArrowRight, Folder, Globe, History, Pencil } from "lucide-react";

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

interface Props {
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsMain({ setTab }: Props) {
  const { setReasoning, setWebBrowsing } = useChatInputActions();
  const { reasoning, webBrowsing } = useChatInputStore();

  return (
    <CommandList>
      <CommandGroup>
        <ChatInputFileUpload />
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
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup>
        <CommandItem onSelect={() => setTab("knowledge")}>
          <Folder />
          <span>Select project</span>
          <ArrowRight className="ml-auto" />
        </CommandItem>
        <CommandItem onSelect={() => setTab("style")}>
          <Pencil />
          <span>Select style</span>
          <ArrowRight className="ml-auto" />
        </CommandItem>
      </CommandGroup>
    </CommandList>
  );
}

export default ChatInputSettingsMain;
