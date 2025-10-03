"use client";
import {
  ArrowRight,
  Folder,
  Globe,
  History,
  Paperclip,
  Plus,
} from "lucide-react";
import { ResponsivePopover } from "../responsive-popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Switch } from "../ui/switch";

function ChatInputSettings() {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ResponsivePopover
        trigger={
          <Button variant="outline" size={"icon"} className="rounded-full">
            <Plus />
          </Button>
        }
        align="start"
      >
        <Command className="">
          <CommandInput placeholder="Type a command or search..." />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem>
                <Paperclip />
                <span>Upload file</span>
              </CommandItem>
              <CommandItem>
                <History />
                <span>Reasoning</span>
                <Switch className="ml-auto" />
              </CommandItem>
              <CommandItem>
                <Globe />
                <span>Web browsing</span>
                <Switch className="ml-auto" />
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem>
                <Folder />
                <span>Select project</span>
                <ArrowRight className="ml-auto" />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </ResponsivePopover>
    </div>
  );
}

export default ChatInputSettings;
