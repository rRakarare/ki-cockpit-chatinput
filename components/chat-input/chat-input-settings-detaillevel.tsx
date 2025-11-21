"use client";
import {
  ArrowLeft,
  Check,
  Eye,
  EyeClosed,
  Lightbulb,
  PowerOff,
  Zap,
} from "lucide-react";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import type { Tabs } from "./chat-input-settings";
import type { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { useChatInputActions, useChatInputStore } from "@/lib/store";

interface Props {
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsDetailLevel({ setTab }: Props) {
  const { detailLevel } = useChatInputStore();
  const { setDetailLevel } = useChatInputActions();

  return (
    <CommandGroup>
      <CommandItem onSelect={() => setTab("default")}>
        <ArrowLeft />
        <span>zurück</span>
      </CommandItem>

      <CommandItem onSelect={() => setDetailLevel("short")}>
        <Eye />
        <span>Short & consised</span>
        {detailLevel === "short" && <Check className="ml-auto" />}
      </CommandItem>
      <CommandItem onSelect={() => setDetailLevel("balanced")}>
        <Eye />
        <span>Balanced</span>
        {detailLevel === "balanced" && <Check className="ml-auto" />}
      </CommandItem>
      <CommandItem onSelect={() => setDetailLevel("detailed")}>
        <Eye />
        <span>Detailed</span>
        {detailLevel === "detailed" && <Check className="ml-auto" />}
      </CommandItem>
    </CommandGroup>
  );
}

export default ChatInputSettingsDetailLevel;
