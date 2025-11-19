"use client";
import { ArrowLeft, ArrowRight, Folder } from "lucide-react";

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

const knowledgeList = [
  {
    id: 1,
    type: "project",
    name: "Schreiben wie ein profi",
  },
  {
    id: 2,
    type: "project",
    name: "Kochen wie ein profi",
  },
  {
    id: 3,
    type: "project",
    name: "Lesen klasse",
  },
];

interface Props {
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsKnowledge({ setTab }: Props) {
  return (
    <CommandGroup>
      <CommandInput placeholder="Type a command or search..." />
      <CommandEmpty>No results found.</CommandEmpty>

      <CommandItem onSelect={() => setTab("default")}>
        <ArrowLeft />
        <span>zurück</span>
      </CommandItem>

      {knowledgeList.map((item) => (
        <CommandItem key={item.id}>
          <Folder />
          <span>{item.name}</span>
        </CommandItem>
      ))}
    </CommandGroup>
  );
}

export default ChatInputSettingsKnowledge;
