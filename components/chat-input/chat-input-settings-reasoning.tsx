"use client";
import {
  ArrowLeft,
  Check,
  Lightbulb,
  Pencil,
  PowerOff,
  Zap,
} from "lucide-react";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import type { Tabs } from "./chat-input-settings";
import type { Dispatch, SetStateAction } from "react";
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

      <CommandItem onSelect={() => setReasoning(null)}>
        <PowerOff />
        <span>No thinking</span>
        {reasoning === null && <Check className="ml-auto" />}
      </CommandItem>
      <CommandItem onSelect={() => setReasoning("standard")}>
        <Zap />
        <span>Fast</span>
        {reasoning === "standard" && <Check className="ml-auto" />}
      </CommandItem>
      <CommandItem onSelect={() => setReasoning("extended")}>
        <Lightbulb />
        <span>Detailed</span>
        {reasoning === "extended" && <Check className="ml-auto" />}
      </CommandItem>
    </CommandGroup>
  );
}

export default ChatInputSettingsReasoning;
