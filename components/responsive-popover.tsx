"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ResponsivePopoverProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}

export function ResponsivePopover({
  children,
  trigger,
  open: controlledOpen,
  onOpenChange,
  contentClassName = "",
  align = "start",
  side = "bottom",
}: ResponsivePopoverProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="cursor-pointer" asChild>
          {trigger}
        </PopoverTrigger>
        <PopoverContent
          className={cn("!p-0", contentClassName)}
          align={align}
          side={side}
        >
          {children}
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="cursor-pointer" asChild>
        {trigger}
      </DrawerTrigger>
      <DrawerContent className="p-2">
        <DrawerTitle className="mb-2 hidden">Settings</DrawerTitle>
        <div className="">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
