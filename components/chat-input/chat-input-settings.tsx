"use client";
import { Plus } from "lucide-react";
import { ResponsivePopover } from "../responsive-popover";
import { Button } from "../ui/button";
import { Command, CommandEmpty, CommandInput } from "@/components/ui/command";

import ChatInputSettingsKnowledge from "./chat-input-settings-knowledge";
import ChatInputSettingsMain from "./chat-input-settings-main";
import { useState } from "react";
import ChatInputSettingsStyle from "./chat-input-settings-style";
import { cn } from "@/lib/utils";

export type Tabs = "default" | "knowledge" | "style";

function ChatInputSettings() {
  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState<Tabs>("default");
  const [open, setOpen] = useState(false);

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ResponsivePopover
        open={open}
        onOpenChange={setOpen}
        trigger={
          <Button
            variant="outline"
            size={"icon"}
            className={cn(
              "rounded-full z-10 origin-center",
              open && "rotate-45",
            )}
          >
            <Plus />
          </Button>
        }
        align="start"
      >
        <Command className="">
          <CommandInput
            value={searchValue}
            onValueChange={(val) => setSearchValue(val)}
            placeholder="Type a command or search..."
          />
          <CommandEmpty>No results found.</CommandEmpty>
          <ChatInputSettingsMain tab={tab} setTab={setTab} />
          <ChatInputSettingsKnowledge
            tab={tab}
            setTab={setTab}
            searchValue={searchValue}
          />
          <ChatInputSettingsStyle
            tab={tab}
            setTab={setTab}
            searchValue={searchValue}
          />
        </Command>
      </ResponsivePopover>
    </div>
  );
}

export default ChatInputSettings;
