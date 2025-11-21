"use client";
import { Plus } from "lucide-react";
import { ResponsivePopover } from "../responsive-popover";
import { Button } from "../ui/button";
import { Command, CommandList } from "@/components/ui/command";

import ChatInputSettingsKnowledge from "./chat-input-settings-knowledge";
import ChatInputSettingsMain from "./chat-input-settings-main";
import { useState } from "react";
import ChatInputSettingsStyle from "./chat-input-settings-style";
import { cn } from "@/lib/utils";
import ChatInputSettingsReasoning from "./chat-input-settings-reasoning";
import ChatInputSettingsDetailLevel from "./chat-input-settings-detaillevel";

export type Tabs = "default" | "knowledge" | "style" | "reasoning" | "detail";

function ChatInputSettings() {
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
            className={"rounded-full z-10"}
          >
            <Plus
              className={cn(" origin-center duration-100", open && "rotate-45")}
            />
          </Button>
        }
        align="start"
      >
        <Command className="">
          {(() => {
            switch (tab) {
              case "default":
                return (
                  <ChatInputSettingsMain setTab={setTab} setOpen={setOpen} />
                );
              case "knowledge":
                return <ChatInputSettingsKnowledge setTab={setTab} />;
              case "style":
                return <ChatInputSettingsStyle setTab={setTab} />;
              case "reasoning":
                return <ChatInputSettingsReasoning setTab={setTab} />;
              case "detail":
                return <ChatInputSettingsDetailLevel setTab={setTab} />;

              default:
                return null;
            }
          })()}
        </Command>
      </ResponsivePopover>
    </div>
  );
}

export default ChatInputSettings;
