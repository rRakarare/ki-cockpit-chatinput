import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ResponsivePopover } from "../responsive-popover";
import { Button } from "../ui/button";
import { Check, ChevronDown } from "lucide-react";
import { models, useChatInputActions, useChatInputStore } from "@/lib/store";
import { cn } from "@/lib/utils";

function ChatInputModel() {
  const { setModel } = useChatInputActions();
  const { model } = useChatInputStore();

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ResponsivePopover
        trigger={
          <Button variant="ghost" className="rounded-full">
            <span className="">{model}</span>
            <ChevronDown />
          </Button>
        }
        align="start"
      >
        <Command className="">
          <CommandInput placeholder="Select model or search..." />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {models.map((m) => (
                <CommandItem key={m} onSelect={() => setModel(m)}>
                  <span className="capitalize">{m}</span>
                  <Check
                    className={cn(
                      "ml-auto opacity-0",
                      m === model && "opacity-100",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </ResponsivePopover>
    </div>
  );
}

export default ChatInputModel;
