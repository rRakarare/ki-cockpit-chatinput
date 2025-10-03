"use client";
import { ArrowUp } from "../animate-ui/icons/arrow-up";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { Button } from "../ui/button";
import ChatInputMessage from "./chat-input-message";
import ChatInputSettings from "./chat-input-settings";

function ChatInput() {
  return (
    <div
      onClick={(e) => e.currentTarget.querySelector("textarea")?.focus()}
      className="cursor-text w-full max-w-[700px] px-4 pb-3 pt-2 border rounded-3xl h-auto focus-within:ring hover:ring ring-primary/20 duration-200"
    >
      <div className="space-y-2">
        <ChatInputMessage />
        <div className="flex items-center justify-between">
          <ChatInputSettings />
          <div>
            <AnimateIcon animateOnHover>
              <Button size={"icon"} className="cursor-pointer rounded-full">
                <ArrowUp />
              </Button>
            </AnimateIcon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
