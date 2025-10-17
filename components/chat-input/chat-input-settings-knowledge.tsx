"use client";
import { ArrowLeft, ArrowRight, Folder } from "lucide-react";

import {
  CommandGroup,
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
  tab: Tabs;
  searchValue: string;
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsKnowledge({ tab, setTab, searchValue }: Props) {
  const showList = tab === "knowledge" || searchValue;
  const showBack = tab === "knowledge";

  return (
    <CommandList className={cn("hidden", showList && "inline")}>
      <CommandGroup>
        {showBack && (
          <CommandItem onSelect={() => setTab("default")}>
            <ArrowLeft />
            <span>zurück</span>
          </CommandItem>
        )}
        {knowledgeList.map((item) => (
          <CommandItem key={item.id}>
            <Folder />
            <span>{item.name}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  );
}

export default ChatInputSettingsKnowledge;
