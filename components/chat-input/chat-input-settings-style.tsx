"use client";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Folder,
  Pencil,
  PencilOff,
} from "lucide-react";

import {
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Tabs } from "./chat-input-settings";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { styleModes } from "@/lib/store-types";
import { useChatInputActions, useChatInputStore } from "@/lib/store";

interface Props {
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsStyle({ setTab }: Props) {
  const { setStyle } = useChatInputActions();
  const { style } = useChatInputStore();

  return (
    <CommandGroup>
      <CommandItem onSelect={() => setTab("default")}>
        <ArrowLeft />
        <span>zurück</span>
      </CommandItem>

      <CommandItem onSelect={() => setStyle(null)}>
        <Pencil />
        <span>{"Standard"}</span>
        {style === null && <Check className="ml-auto" />}
      </CommandItem>
      <CommandItem onSelect={() => setStyle("analytical")}>
        <Pencil />
        <span>{"Analytical"}</span>
        {style === "analytical" && <Check className="ml-auto" />}
      </CommandItem>
      <CommandItem onSelect={() => setStyle("creative")}>
        <Pencil />
        <span>{"Creative"}</span>
        {style === "creative" && <Check className="ml-auto" />}
      </CommandItem>
    </CommandGroup>
  );
}

export default ChatInputSettingsStyle;
