"use client";
import { ArrowLeft, ArrowRight, Check, Folder } from "lucide-react";

import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Tabs } from "./chat-input-settings";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { useChatInputActions, useChatInputStore } from "@/lib/store";
import { Knowledge } from "@/lib/store-types";

const knowledgeList = [
  {
    id: "1",
    type: "project",
    name: "Schreiben wie ein profi",
  },
  {
    id: "2",
    type: "project",
    name: "Kochen wie ein profi",
  },
  {
    id: "3",
    type: "project",
    name: "Lesen klasse",
  },
] as Knowledge[];

interface Props {
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsKnowledge({ setTab }: Props) {
  const { knowledge } = useChatInputStore();
  const { setKnowledge } = useChatInputActions();

  return (
    <CommandList>
      <CommandInput placeholder="Search..." />
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup>
        <CommandItem onSelect={() => setTab("default")}>
          <ArrowLeft />
          <span>zurück</span>
        </CommandItem>

        {knowledgeList.map((item) => (
          <CommandItem key={item.id} onSelect={() => setKnowledge(item)}>
            <Folder />
            <span>{item.name}</span>
            {knowledge?.id === item.id && <Check className="ml-auto" />}
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  );
}

export default ChatInputSettingsKnowledge;
