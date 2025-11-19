"use client";
import { ArrowLeft, ArrowRight, Check, Folder, Pencil } from "lucide-react";

import {
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Tabs } from "./chat-input-settings";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { reasoningModes } from "@/lib/store-types";
import { useChatInputActions, useChatInputStore } from "@/lib/store";

interface Props {
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsReasoning({ setTab }: Props) {
  const { reasoning } = useChatInputStore();
  const { setReasoning } = useChatInputActions();

  console.log(reasoning);

  return (
    <CommandGroup>
      <CommandItem onSelect={() => setTab("default")}>
        <ArrowLeft />
        <span>zurück</span>
      </CommandItem>

      {reasoningModes.map((item) => (
        <CommandItem
          key={item}
          onSelect={() => setReasoning(item === reasoning ? null : item)}
        >
          <Pencil />
          <span>{item}</span>
          {item === reasoning && <Check className="ml-auto" />}
        </CommandItem>
      ))}
    </CommandGroup>
  );
}

export default ChatInputSettingsReasoning;
