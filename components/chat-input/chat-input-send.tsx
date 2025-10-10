import { AnimateIcon } from "../animate-ui/icons/icon";
import { Button } from "../ui/button";
import { ArrowUp } from "../animate-ui/icons/arrow-up";

function ChatInputSend() {
  return (
    <AnimateIcon animateOnHover>
      <Button size={"icon"} className="cursor-pointer rounded-full">
        <ArrowUp />
      </Button>
    </AnimateIcon>
  );
}

export default ChatInputSend;
