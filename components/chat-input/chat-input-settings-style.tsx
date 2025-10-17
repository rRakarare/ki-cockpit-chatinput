"use client";
import { ArrowLeft, ArrowRight, Folder, Pencil } from "lucide-react";

import {
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Tabs } from "./chat-input-settings";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

const styleList = [
  {
    id: 1,
    name: "Normal",
  },
  {
    id: 2,
    name: "Creative",
  },
  {
    id: 3,
    name: "Analytical",
  },
];

interface Props {
  tab: Tabs;
  searchValue: string;
  setTab: Dispatch<SetStateAction<Tabs>>;
}

function ChatInputSettingsStyle({ tab, setTab, searchValue }: Props) {
  const showList = tab === "style" || searchValue;
  const showBack = tab === "style";

  return (
    <CommandList className={cn("hidden", showList && "inline")}>
      <CommandGroup>
        {showBack && (
          <CommandItem onSelect={() => setTab("default")}>
            <ArrowLeft />
            <span>zurück</span>
          </CommandItem>
        )}
        {styleList.map((item) => (
          <CommandItem key={item.id}>
            <Pencil />
            <span>{item.name}</span>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  );
}

export default ChatInputSettingsStyle;
